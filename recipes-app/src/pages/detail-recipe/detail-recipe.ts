import { RecipesService } from './../../services/recipes';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { ShoppingListService } from './../../services/shopping-list.service';
import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail-recipe',
  templateUrl: 'detail-recipe.html',
})
export class DetailRecipePage implements OnInit{

 recipe: Recipe;
 index: number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              private slServicice: ShoppingListService,
              private recipesService: RecipesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailRecipePage');
  }

  ionViewWillLeave(){
    console.log('I am leaving');
   // this.navCtrl.
  }
  ngOnInit(): void {
    this.recipe =  this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  onAddIngredients(){
    this.slServicice.addIngredients(this.recipe.ingredients);
    this.presentToast('Ingredients added to shopping list');
  }
  onEditRecipe(){
    this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index});
  }
  onDeleteRecipe(){
    this.recipesService.deleteRecipe(this.index);
    this.navCtrl.popToRoot();
    this.presentToast('Recipe deleted');
  }

  presentToast(theMessage: string){
    let toast = this.toastCtrl.create({
      message: theMessage ,
      duration: 1500
    });
    toast.present();
  }
}
