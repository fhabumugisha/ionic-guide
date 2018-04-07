import { DBOptionsPage } from "./../database-options/database-options";
import { OnInit } from "@angular/core";
import { Ingredient } from "../../models/ingredient";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController,
  ToastController,
  LoadingController
} from "ionic-angular";
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/shopping-list.service";

import { AuthService } from "../../services/auth";

@IonicPage()
@Component({
  selector: "page-shopping-list",
  templateUrl: "shopping-list.html"
})
export class ShoppingListPage {
  ingredients: Ingredient[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private slService: ShoppingListService,
    private popoverCtrl: PopoverController,
    private authService: AuthService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ionViewWillEnter() {
    this.loadItems();
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ShoppingListPage");
  }

  onAddItem(f: NgForm) {
    console.log(f);

    //this.slService.addIngredient(f.value);
    this.slService.addItem(f.value.ingredientName, f.value.amount);
    f.reset();
    this.loadItems();
  }

  onRemoveIngredient(index: number) {
    this.slService.removeItem(index);
    this.loadItems();
  }
  private loadItems() {
    this.ingredients = this.slService.getIngredients();
  }

  onShowOptions(event: MouseEvent) {
    const popover = this.popoverCtrl.create(DBOptionsPage);
    popover.present({ ev: event });
    popover.onDidDismiss(data => {
      if (!data) {
        return;
      }
      if (data.action == "load") {
        const loading = this.loadingCtrl.create({
          spinner: "crescent",
          content: "Loading list..."
        });
        loading.present();
        this.authService
          .getActiveUser()
          .getToken()
          .then((token: string) => {
            this.slService.fecthList(token).subscribe(
              (list: Ingredient[]) => {
                if (list) {
                  this.ingredients = list;
                } else {
                  this.ingredients = [];
                }
                loading.dismiss();
              },
              error => {
                loading.dismiss();
                console.log(error);
              }
            );
          });
      } else if (data.action == "save") {
        const loading = this.loadingCtrl.create({
          spinner: "crescent",
          content: "Saving data..."
        });
        loading.present();
        this.authService
          .getActiveUser()
          .getToken()
          .then((token: string) => {
            this.slService.storeList(token).subscribe(
              () => {
                loading.dismiss();
                this.presentToast("Data stored with succes!", "successToast");
              },
              error => {
                console.log(error);
                loading.dismiss();
              }
            );
          });
      }
    });
  }

  /**
   * Show the toast
   * @param theMessage : the message
   * @param cssClass : the css class
   */
  presentToast(theMessage: string, cssClass: string) {
    let toast = this.toastCtrl.create({
      message: theMessage,
      duration: 1500,
      cssClass: cssClass
    });
    toast.present();
  }
}
