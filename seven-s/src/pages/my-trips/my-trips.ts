import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTripPage } from '../edit-trip/edit-trip';

import {  DetailTripPage } from "../detail-trip/detail-trip";
@Component({
  selector: 'page-my-trips',
  templateUrl: 'my-trips.html'
})
export class MyTripsPage {

  constructor(public navCtrl: NavController) {
  }
  goToEditTrip(params){
    if (!params) params = {};
    this.navCtrl.push(EditTripPage);
  }
  goToMyTrips(params){
    if (!params) params = {};
    this.navCtrl.push(MyTripsPage);
  }

  onGoToDetail() {
    this.navCtrl.push(DetailTripPage);
  }
}
