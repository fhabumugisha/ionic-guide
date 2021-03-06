import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EditMessagePage} from "../edit-message/edit-message"


@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {
detail: string = "info";
  constructor(public navCtrl: NavController) {
  }
  goToExplorer(params){
    if (!params) params = {};
    this.navCtrl.popToRoot();
  }

  onSendMessage(){
    this.navCtrl.push(EditMessagePage);
  }
  
}
