
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListsPage } from './../pages/lists/lists';
import { GridPage } from '../pages/grid/grid';
import { TouchEventComponent } from '../components/touch-event.component';
import { GamePage } from '../pages/game/game';
import { ResetComponent } from '../components/reset.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ListsPage,
    GridPage,
    TouchEventComponent,
    GamePage,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListsPage,
    TabsPage,
    GridPage,
    GamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
