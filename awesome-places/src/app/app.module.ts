import { SetLocationPage } from "./../pages/set-location/set-location";
import { AddPlacePage } from "./../pages/add-place/add-place";
import { PlacePage } from "./../pages/place/place";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { AgmCoreModule } from "@agm/core";
import { Geolocation } from "@ionic-native/geolocation";
import { Camera } from "@ionic-native/camera";
import { PlacesService } from "../services/places";
@NgModule({
  declarations: [MyApp, HomePage, PlacePage, AddPlacePage, SetLocationPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD_p0nurEcIMPaKUPm6uX456VU7u9kV-vA"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, PlacePage, AddPlacePage, SetLocationPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    Camera,
    PlacesService
  ]
})
export class AppModule {}
