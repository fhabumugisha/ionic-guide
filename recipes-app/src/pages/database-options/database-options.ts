import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";

@Component({
  selector: "page-sl-options",
  template: `
  <ion-list>
  <ion-list-header>Store and Load</ion-list-header>
  <button ion-item (click)="onAction('load')">Load list</button>
  <button ion-item (click)="onAction('save')">Save list </button>

</ion-list>
  `
})
export class DBOptionsPage {
  constructor(private viewCtrl: ViewController) {}
  onAction(action: string) {
    this.viewCtrl.dismiss({ action: action });
  }
}
