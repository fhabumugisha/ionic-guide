import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-location-options',
  templateUrl: 'location-options.html',
})
export class LocationOptionsPage {

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationOptionsPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
}

}
