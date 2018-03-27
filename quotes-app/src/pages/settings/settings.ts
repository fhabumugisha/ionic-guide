import { SettingsService } from './../../services/settings';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private settingsService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(event: Toggle) {
   // this.settingsService.changeBackground(event.checked);
    this.settingsService.setBackground(event.checked);
  }

  checkAltBackground(){
    return this.settingsService.isAltBackground();
  }

}
