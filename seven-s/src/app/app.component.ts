import { TabsControllerPage } from "./../pages/tabs-controller/tabs-controller";
import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { WelcomeTo7SPage } from "../pages/welcome-to7s/welcome-to7s";
import firebase from "firebase";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = TabsControllerPage;
  welcomPage = WelcomeTo7SPage;
  isUserAuthenticated = false;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    firebase.initializeApp({
      apiKey: "AIzaSyBl4FE0R7sWuGELxfoYLd4cZKHcU9XI8uU",
      authDomain: "seven-s-81593.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isUserAuthenticated = true;
        this.rootPage = TabsControllerPage;
      } else {
        this.isUserAuthenticated = false;
        this.rootPage = WelcomeTo7SPage;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
