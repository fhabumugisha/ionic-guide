import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { CalendarModal, CalendarComponentOptions, CalendarModalOptions, DayConfig, CalendarResult } from "ion2-calendar";

/**
 * Generated class for the EditMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-message',
  templateUrl: 'edit-message.html',
})
export class EditMessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditMessagePage');
  }

  goToExplorer(){
    this.navCtrl.popToRoot();
  }
openCalendar() {
        const options: CalendarModalOptions = {
          pickMode: 'range',
          title: 'RANGE'
        };
    
        let myCalendar = this.modalCtrl.create(CalendarModal, {
          options: options
        });
    
        myCalendar.present();
    
        myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
          console.log(date);
        });
  }
}
