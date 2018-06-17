import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

/**
 * Generated class for the ExplorerOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explorer-options',
  templateUrl: 'explorer-options.html',
})
export class ExplorerOptionsPage {

  constructor(public viewCtrl: ViewController) {

  }

dismiss() {
    this.viewCtrl.dismiss();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorerOptionsPage');
  }

}
