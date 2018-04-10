import { Place } from "./../../models/place";
import { Component } from "@angular/core";
import { IonicPage, NavParams, ViewController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-place",
  templateUrl: "place.html"
})
export class PlacePage {
  place: Place;
  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.place = this.navParams.get("place");
  }

  onLeave() {
    this.viewCtrl.dismiss();
  }
  onDelete() {}
}
