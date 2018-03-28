import { GamePage } from './../game/game';
import { GridPage } from './../grid/grid';

import { Component } from "@angular/core";
import { HomePage } from "../home/home";
import { ListsPage } from "../lists/lists";


@Component({
  selector: 'page-tabs',
  template:`
    <ion-tabs>
      <ion-tab [root]="gamePage" tabTitle="Game" tabIcon="ios-game-controller-a" ></ion-tab>
      <ion-tab [root]="gridPage" tabTitle="Grid" tabIcon="grid" ></ion-tab>
      <ion-tab [root]="listsPage" tabTitle="Lists" tabIcon="list" ></ion-tab>
      <ion-tab [root]="buttonsPage" tabTitle="Buttons" tabIcon="apps" ></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  buttonsPage =  HomePage;
  listsPage = ListsPage;
  gridPage = GridPage;
  gamePage = GamePage
}
