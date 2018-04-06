import { OnInit } from "@angular/core";
import { Ingredient } from "../../models/ingredient";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController
} from "ionic-angular";
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/shopping-list.service";
import { SLOptionsPage } from "./sl-options/sl-options";
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
    private authService: AuthService
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
    const popover = this.popoverCtrl.create(SLOptionsPage);
    popover.present({ ev: event });
    popover.onDidDismiss(data =>{
      if(data.action == 'load'){

      }else{
        this.authService.getActiveUser()
        .getToken()
        .then(
          (token: string) => {

          }
        );
      }
    })
  }
}
