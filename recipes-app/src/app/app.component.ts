import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';
import { NavController, MenuController, LoadingController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

import firebase from 'firebase';
import { AuthService } from '../services/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  signinPage: any = SigninPage;
  signupPage: any = SignupPage;
  isUserAuthenticated = false;
  @ViewChild('nav') root : NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
            private menuCtrl: MenuController,
            private authService: AuthService,
            private loadingCtrl: LoadingController) {

    firebase.initializeApp({
            apiKey: "AIzaSyBeg2P4A_92HNn-gp5Rqvc1DyzOGpQi1wk",
            authDomain: "ion-recipes-book.firebaseapp.com"
     });

     firebase.auth().onAuthStateChanged(user => {
       if(user){
         this.isUserAuthenticated = true;
         this.rootPage = TabsPage;
       }else{
        this.isUserAuthenticated = false;
        this.rootPage = SigninPage;
       }
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
    const loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Signing you out..."
    });
    loading.present();
    this.authService.logout().then(data => {
      loading.dismiss();
      this.menuCtrl.close();
      this.root.setRoot(SigninPage);
    })
    .catch(error => {
      loading.dismiss();
      /* const alert = this.alertCtrl.create({
        title: "Signup failed",
        message: error.message,
        buttons: ["Ok"]
      });
      alert.present(); */
    });
  }
}
