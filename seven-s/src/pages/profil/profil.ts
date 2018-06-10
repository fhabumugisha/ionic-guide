import { WelcomeTo7SPage } from "./../welcome-to7s/welcome-to7s";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { SignupPage } from "../signup/signup";
import { ExplorerPage } from "../explorer/explorer";
import { UserDetailPage } from "../user-detail/user-detail";
import { LoginPage } from "../login/login";
import firebase from "firebase";
import { AuthService } from "../../services/auth";
@Component({
  selector: "page-profil",
  templateUrl: "profil.html"
})
export class ProfilPage {
  constructor(
    public navCtrl: NavController,
    private authService: AuthService
  ) {}
  goToWelcomeTo7S(params) {
    if (!params) params = {};
    this.navCtrl.push(WelcomeTo7SPage);
  }
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
  onLogout() {
    return this.authService.logout().then(data => {
      this.navCtrl.popToRoot();
    });
  }
}
