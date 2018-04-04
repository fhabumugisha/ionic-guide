import { Recipe } from './../../models/recipe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailRecipePage } from './../detail-recipe/detail-recipe';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { RecipesService } from '../../services/recipes';



@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipeDetail = DetailRecipePage;
  recipes: Recipe[] = [];
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private recipesService: RecipesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  ionViewWillEnter(){
    this.recipes =  this.recipesService.getRecipes();
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

  onLoadRecipes(){
    this.recipes =  this.recipesService.getRecipes();
  }

}
