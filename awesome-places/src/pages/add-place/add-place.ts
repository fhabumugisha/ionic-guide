import { Location } from "./../../models/location";
import { NgForm } from "@angular/forms";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  ToastController
} from "ionic-angular";
import { SetLocationPage } from "../set-location/set-location";
import { Geolocation } from "@ionic-native/geolocation";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { PlacesService } from "../../services/places";
@IonicPage()
@Component({
  selector: "page-add-place",
  templateUrl: "add-place.html"
})
export class AddPlacePage {
  location: Location = new Location(51.678418, 7.809007);
  locationIsSet = false;
  imageUrl = "";
  /**
   *
   */
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private camera: Camera,
    private placesService: PlacesService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddPlacePage");
  }

  onSubmit(f: NgForm) {
    this.placesService.addPlace(
      f.value.title,
      f.value.description,
      this.location,
      this.imageUrl
    );
    f.reset();
    this.imageUrl = "";
    this.location = new Location(51.678418, 7.809007);
    this.locationIsSet = false;
  }
  onLocate() {
    let load = this.loadingCtrl.create({
      spinner: "crescent",
      content: "Loading current position...."
    });
    load.present();
    this.geolocation
      .getCurrentPosition()
      .then(location => {
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
        this.locationIsSet = true;
        load.dismiss();
      })
      .catch(error => {
        console.log("Error getting location ", error);
        load.dismiss();
        this.presentToast("Error getting location : " + error, "danger");
      });
  }
  onOpenMap() {
    let modal = this.modalCtrl.create(SetLocationPage, {
      location: this.location,
      isSet: this.locationIsSet
    });
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        console.log("selected location : " + data.location);
        this.location = data.location;
        this.locationIsSet = true;
      }
    });
    // this.navCtrl.push(SetLocationPage);
  }
  onTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      // destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };
    this.camera
      .getPicture(options)
      .then(imageData => {
        console.log("ImageData : ", imageData);
        this.imageUrl = imageData;
      })
      .catch(error => {
        console.log("Error getting location ", error);
        //load.dismiss();
        this.presentToast("Error getting location : " + error, "danger");
      });
  }

  presentToast(theMessage: string, cssClass: string) {
    let toast = this.toastCtrl.create({
      message: theMessage,
      duration: 1500,
      cssClass: cssClass
    });
    toast.present();
  }
}
