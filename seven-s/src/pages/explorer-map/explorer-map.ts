import { Component, NgZone } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ViewController
} from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
/* import {
  NativeGeocoder,
  NativeGeocoderReverseResult,
  NativeGeocoderForwardResult,
  NativeGeocoderOptions
} from "@ionic-native/native-geocoder"; */

declare var google;
//declare var cordova: any;
@IonicPage()
@Component({
  selector: "page-explorer-map",
  templateUrl: "explorer-map.html"
})
export class ExplorerMapPage {
  map: any;
  autocomplete: any;
  autocompleteItems: any;
  GoogleAutocomplete: any;
  geocoder: any;
  markers: any;
  loading: any;
  selectedPlace: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public zone: NgZone,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public viewCtrl: ViewController
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: "" };
    this.autocompleteItems = [];
    this.geocoder = new google.maps.Geocoder();
    this.markers = [];
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidEnter() {
    // let infoWindow = new google.maps.InfoWindow({map: map});
    //Set latitude and longitude of some place
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });
  }

  tryGeolocation() {
    this.loading.present();
    this.clearMarkers(); //remove previous markers
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        let pos = {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        };
        let marker = new google.maps.Marker({
          position: pos,
          map: this.map,
          title: "I am here!"
        });
        this.getLocationFromPosition(pos.lat, pos.lng);
        this.markers.push(marker);
        this.map.setCenter(pos);

        console.log("selectedPlace : ", this.selectedPlace);
        this.loading.dismiss();
      })
      .catch(error => {
        console.log("Error getting location", error);
        this.loading.dismiss();
      });
  }

  updateSearchResults() {
    if (this.autocomplete.input == "") {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions(
      { input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        if (predictions) {
          this.zone.run(() => {
            predictions.forEach(prediction => {
              this.autocompleteItems.push(prediction);
            });
          });
        }
      }
    );
  }

  selectSearchResult(item) {
    this.clearMarkers();
    this.autocompleteItems = [];

    this.geocoder.geocode({ placeId: item.place_id }, (results, status) => {
      if (status === "OK" && results[0]) {
        // let position = {
        //     lat: results[0].geometry.location.lat,
        //     lng: results[0].geometry.location.lng
        // };
        console.log("result :", results[0].formatted_address);
        this.selectedPlace = results[0].formatted_address;
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map
        });
        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
      }
    });
  }

  clearMarkers() {
    for (var i = 0; i < this.markers.length; i++) {
      console.log(this.markers[i]);
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }
  dismiss() {
    this.viewCtrl.dismiss({ selectedPlace: this.selectedPlace });
  }

  getLocationFromPosition(latitude: number, longitude: number) {
    var latlng = { lat: latitude, lng: longitude };

    this.geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          console.log(results[0].formatted_address);
          this.selectedPlace = results[0].formatted_address;
          return results[0].formatted_address;
          //this.autocomplete.input = results[0].formatted_address;
        } else {
          console.log("No results found");
          // return "";
        }
      } else {
        console.log("Geocoder failed due to: " + status);
        //  return "";
      }
    });

    // return sp;
  }
}
