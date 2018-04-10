import { PlacePage } from "./../place/place";
import { PlacesService } from "./../../services/places";
import { Place } from "./../../models/place";
import { AddPlacePage } from "./../add-place/add-place";
import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  addPlacePage = AddPlacePage;

  places: Place[] = [];
  constructor(
    public navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter() {
    this.places = this.placesService.loadPlaces();
  }
  onAddPlace() {
    this.navCtrl.push(AddPlacePage);
  }

  onOpenPlace(place: Place) {
    let modal = this.modalCtrl.create(PlacePage, {place : place});
    modal.present();
  }
}
