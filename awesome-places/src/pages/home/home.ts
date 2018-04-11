import { PlacePage } from "./../place/place";
import { PlacesService } from "./../../services/places";
import { Place } from "./../../models/place";
import { AddPlacePage } from "./../add-place/add-place";
import { Component, OnInit } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  addPlacePage = AddPlacePage;

  places: Place[] = [];
  /**
   *  The constructor
   */
  constructor(
    public navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.placesService.fetchPlaces().then((places: Place[]) => {
      this.places = places;
    });
  }

  ionViewWillEnter() {
    this.places = this.placesService.loadPlaces();
  }
  /**
   * Add new place
   */
  onAddPlace() {
    this.navCtrl.push(AddPlacePage);
  }

  /**
   * View place details
   */
  onOpenPlace(index: number, place: Place) {
    let modal = this.modalCtrl.create(PlacePage, {
      index: index,
      place: place
    });
    modal.present();
    modal.onDidDismiss(() => {
      this.places = this.placesService.loadPlaces();
    });
  }
}
