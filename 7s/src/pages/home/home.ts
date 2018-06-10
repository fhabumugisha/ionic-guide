import { SigninPage } from "./../../../../recipes-app/src/pages/signin/signin";
import { SignupPage } from "./../../../../recipes-app/src/pages/signup/signup";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  onCreateAccount() {
    this.navCtrl.push(SignupPage);
  }
  onLogin() {
    this.navCtrl.push(SigninPage);
  }
}
