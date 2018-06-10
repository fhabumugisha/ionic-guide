import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplorerPage } from '../explorer/explorer';
import { UserDetailPage } from '../user-detail/user-detail';

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html'
})
export class FiltersPage {

  constructor(public navCtrl: NavController) {
  }
  goToExplorer(params){
    if (!params) params = {};
    this.navCtrl.push(ExplorerPage);
  }goToUserDetail(params){
    if (!params) params = {};
    this.navCtrl.push(UserDetailPage);
  }
}
