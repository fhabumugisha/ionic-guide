import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { WelcomeTo7SPage } from "../pages/welcome-to7s/welcome-to7s";
import { MyTripsPage } from "../pages/my-trips/my-trips";
import { MessagesPage } from "../pages/messages/messages";
import { TabsControllerPage } from "../pages/tabs-controller/tabs-controller";
import { PagePage } from "../pages/page/page";
import { ProfilPage } from "../pages/profil/profil";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { ExplorerPage } from "../pages/explorer/explorer";
import { MessageThreadPage } from "../pages/message-thread/message-thread";
import { EditTripPage } from "../pages/edit-trip/edit-trip";
import { FiltersPage } from "../pages/filters/filters";
import { UserDetailPage } from "../pages/user-detail/user-detail";
import { DetailMessagePage} from "../pages/detail-message/detail-message"
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { MyPopOverPage} from "../pages/my-pop-over/my-pop-over"
import { AuthService } from '../services/auth';
@NgModule({
  declarations: [
    MyApp,
    WelcomeTo7SPage,
    MyTripsPage,
    MessagesPage,
    TabsControllerPage,
    PagePage,
    ProfilPage,
    LoginPage,
    SignupPage,
    ExplorerPage,
    MessageThreadPage,
    EditTripPage,
    FiltersPage,
    UserDetailPage,
    DetailMessagePage,
    MyPopOverPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomeTo7SPage,
    MyTripsPage,
    MessagesPage,
    TabsControllerPage,
    PagePage,
    ProfilPage,
    LoginPage,
    SignupPage,
    ExplorerPage,
    MessageThreadPage,
    EditTripPage,
    FiltersPage,
    UserDetailPage,
    DetailMessagePage,
    MyPopOverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService
  ]
})
export class AppModule {}
