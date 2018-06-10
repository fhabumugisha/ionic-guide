import { Component } from "@angular/core";

import { HomePage } from "../home/home";
import { TripsPage } from "../trips/trips";
import { ProfilPage } from "../profil/profil";
import { MessagesPage } from "../messages/messages";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = TripsPage;
  tab3Root = MessagesPage;
  tab4Root = ProfilPage;

  constructor() {}
}
