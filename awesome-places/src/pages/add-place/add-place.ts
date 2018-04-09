import { Location } from "./../../models/location";
import { NgForm } from "@angular/forms";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { SetLocationPage } from "../set-location/set-location";

@IonicPage()
@Component({
  selector: "page-add-place",
  templateUrl: "add-place.html"
})
export class AddPlacePage {
  location: Location = new Location(51.678418, 7.809007);
  locationIsSet = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddPlacePage");
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }
  onLocate() {}
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
  onTakePhoto() {}
}
