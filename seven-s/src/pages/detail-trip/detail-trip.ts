import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-trip',
  templateUrl: 'detail-trip.html',
})
export class DetailTripPage {

slides = [
    {
      title: "Welcome to the Docs!",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
      image: "assets/img/pexels-photo-1.jpeg",
    },
    {
      title: "What is Ionic?",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
      image: "assets/img/pexels-photo-2.jpeg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      image: "assets/img/pexels-photo-3.jpeg",
    }
];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTripPage');
  }

}
