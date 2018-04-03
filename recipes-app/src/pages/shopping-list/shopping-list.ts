import { OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list.service';



@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {


  ingredients: Ingredient [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private slService : ShoppingListService) {
  }


  ionViewWillEnter(){
    this.loadItems();
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

  onAddItem(f:NgForm){
    console.log(f);

    //this.slService.addIngredient(f.value);
    this.slService.addItem(f.value.ingredientName, f.value.amount);
    f.reset();
    this.loadItems();
  }


  onRemoveIngredient(index: number){
    this.slService.removeItem(index);
    this.loadItems();
  }
  private loadItems(){
    this.ingredients =  this.slService.getIngredients();
  }
}
