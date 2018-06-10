import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplorerPage } from '../explorer/explorer';


@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {

  constructor(public navCtrl: NavController) {
  }
  goToExplorer(params){
    if (!params) params = {};
    this.navCtrl.push(ExplorerPage);
  }
  goToUserDetail(params){
    if (!params) params = {};
    this.navCtrl.push(UserDetailPage);
  }
}
