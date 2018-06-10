import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageThreadPage } from '../message-thread/message-thread';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  constructor(public navCtrl: NavController) {
  }
  goToMessageThread(params){
    if (!params) params = {};
    this.navCtrl.push(MessageThreadPage);
  }
}
