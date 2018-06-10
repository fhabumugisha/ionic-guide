import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ExplorerPage } from "../explorer/explorer";
import { UserDetailPage } from "../user-detail/user-detail";
import { ProfilPage } from "../profil/profil";
import { WelcomeTo7SPage } from "../welcome-to7s/welcome-to7s";
import { SignupPage } from "../signup/signup";
import { LoginPage } from "../login/login";
import { MyTripsPage } from "../my-trips/my-trips";

import { MessagesPage } from "../messages/messages";


@Component({
  selector: "page-tabs-controller",
  templateUrl: "tabs-controller.html"
})
export class TabsControllerPage {
  tab1Root: any = MyTripsPage;
  tab2Root: any = ExplorerPage;
  tab3Root: any = MessagesPage;
  tab4Root: any = ProfilPage;
  constructor(public navCtrl: NavController) {}
  goToExplorer(params) {
    if (!params) params = {};
    this.navCtrl.push(ExplorerPage);
  }
  goToUserDetail(params) {
    if (!params) params = {};
    this.navCtrl.push(UserDetailPage);
  }
  goToProfil(params) {
    if (!params) params = {};
    this.navCtrl.push(ProfilPage);
  }
  goToWelcomeTo7S(params) {
    if (!params) params = {};
    this.navCtrl.push(WelcomeTo7SPage);
  }
  goToSignup(params) {
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
  goToLogin(params) {
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
