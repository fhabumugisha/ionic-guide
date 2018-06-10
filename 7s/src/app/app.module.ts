import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { TripsPage} from "../pages/trips/trips";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ProfilPage } from "../pages/profil/profil";
import { SigninPage } from "../pages/signin/signin";
import { MessagesPage } from "../pages/messages/messages";
import { DetailMessagePage } from "../pages/detail-message/detail-message";
import { MyPopOverPage } from "../pages/my-pop-over/my-pop-over";

@NgModule({
  declarations: [
    MyApp,
    TripsPage,
    MessagesPage,
    DetailMessagePage,
    SigninPage,
    ProfilPage,
    HomePage,
    TabsPage,
    MyPopOverPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TripsPage,
    MessagesPage,
    DetailMessagePage,
    SigninPage,
    ProfilPage,
    HomePage,
    TabsPage,
    MyPopOverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
