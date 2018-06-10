import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyTripsPage } from '../my-trips/my-trips';


@Component({
  selector: 'page-edit-trip',
  templateUrl: 'edit-trip.html'
})
export class EditTripPage {

  constructor(public navCtrl: NavController) {
  }
  goToMyTrips(params){
    if (!params) params = {};
    this.navCtrl.push(MyTripsPage);
  }goToEditTrip(params){
    if (!params) params = {};
    this.navCtrl.push(EditTripPage);
  }
}
