import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { SignupPage } from "../signup/signup";
import { ExplorerPage } from "../explorer/explorer";
import { UserDetailPage } from "../user-detail/user-detail";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-welcome-to7s",
  templateUrl: "welcome-to7s.html"
})
export class WelcomeTo7SPage {
  constructor(public navCtrl: NavController) {}
  goToSignup(params) {
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
  goToExplorer(params) {
    if (!params) params = {};
    this.navCtrl.push(ExplorerPage);
  }
  goToUserDetail(params) {
    if (!params) params = {};
    this.navCtrl.push(UserDetailPage);
  }
  goToLogin(params) {
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
