import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { UserDetailPage } from "../user-detail/user-detail";

@Component({
  selector: "page-explorer",
  templateUrl: "explorer.html"
})
export class ExplorerPage {
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}
  goToUserDetail(params) {
    if (!params) params = {};
    this.navCtrl.push(UserDetailPage);
  }
  goToExplorer(params) {
    if (!params) params = {};
    this.navCtrl.push(ExplorerPage);
  }

  ionViewDidLoad() {
    this.showConfirm();
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: "What do you want to explorer ?",
      buttons: [
        {
          text: "Hosts",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Trippers",
          handler: () => {
            console.log("Agree clicked");
          }
        },
        {
          text: "Events",
          handler: () => {
            console.log("Agree clicked");
          }
        }
      ]
    });
    confirm.present();
  }
}
