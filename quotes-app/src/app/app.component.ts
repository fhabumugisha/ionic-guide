import { NavController, MenuController } from 'ionic-angular';

import { SettingsPage } from './../pages/settings/settings';

import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from './../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  tabsPage:any = TabsPage;
  settingsPage:any = SettingsPage;
@ViewChild('nav') root : NavController;
  constructor(platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen,
            private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    console.log(platform.platforms());
    console.log(platform.height());
    console.log(platform.width());
    console.log(platform.isLandscape());
    console.log(platform.isPortrait());
    if(platform.is('android')){
//only on android
    }
  }

  onLoad(page: any){
      this.root.setRoot(page);
      this.menuCtrl.close();
  }
}

