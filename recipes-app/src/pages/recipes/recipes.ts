import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailRecipePage } from './../detail-recipe/detail-recipe';
import { EditRecipePage } from './../edit-recipe/edit-recipe';



@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipeDetail = DetailRecipePage;
  constructor(private navCtrl: NavController,
              private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  onAddNewRecipe() {
    this.navCtrl.push(EditRecipePage, {mode: 'New'}, {
      animate:true,
      direction:'forward',
      easing:'ease-out',
      duration:2000,
      animation:'md-transition'

    });
  }

}
