import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';
import { NavController, MenuController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  signinPage: any = SigninPage;
  signupPage: any = SignupPage;
  @ViewChild('nav') root : NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
            private menuCtrl: MenuController) {

    firebase.initializeApp({
            apiKey: "AIzaSyBeg2P4A_92HNn-gp5Rqvc1DyzOGpQi1wk",
            authDomain: "ion-recipes-book.firebaseapp.com"
     });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any){
    this.root.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout(){

  }
}
