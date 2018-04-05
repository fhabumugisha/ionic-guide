
import { Recipe } from './../../models/recipe';
import { RecipesService } from './../../services/recipes';
import { Component, OnInit } from '@angular/core';
import { IonicPage,
  NavController,
  NavParams,
  AlertController,
  ActionSheetController,
  ToastController
} from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit{
  mode = 'New';
  selectOptions = ['Easy','Medium','Hard'];
  recipeForm : FormGroup;
  recipe: Recipe;
 index: number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private actionSheetCtrl: ActionSheetController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.mode = this.navParams.get('mode');
    if(this.mode == 'Edit'){
      this.recipe =  this.navParams.get('recipe');
      this.index =  this.navParams.get('index');
    }
    this.initializeForm();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipePage');
  }

  private initializeForm(){
    let title = null;
    let description = null;
    let difficulty = 'Medium';
    let recipeIngredients = new FormArray([]);;
    if(this.mode == 'Edit'){
       title = this.recipe.title;
     description = this.recipe.description;
     difficulty = this.recipe.difficulty;
     for(let ingredient of this.recipe.ingredients){
      recipeIngredients.push(
        new FormGroup({
            'name' :   new FormControl(ingredient.name, Validators.required),
            'amount':   new FormControl(ingredient.amount, Validators.required)
             })
      );
     }

    }
    this.recipeForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'difficulty': new FormControl(difficulty,Validators.required ),
      'ingredients' : recipeIngredients

    });
  }

  onSubmit(){
    console.log(this.recipeForm);
    let value = this.recipeForm.value;
    let ingredients =  [];
    if(value.ingredients.length > 0){
      console.log('Ingredients : ' +  value.ingredients);
      ingredients = value.ingredients.map(data => {
        return {name: data.name, amount: data.amount};
      });
    }
    let recipe = new Recipe(value.title, value.description, value.difficulty, ingredients);
    if(this.mode == 'Edit'){
      this.recipesService.updateRecipe(this.index, recipe);
    }else{
      this.recipesService.addRecipe(recipe);
    }

    this.recipeForm.reset();
    this.navCtrl.popToRoot();
  }
  onManageIngredients() {
   // const actionSheet = this.actionSheetCtrl.create();
    const actionSheet = this.actionSheetCtrl.create({
      title :'What do you want to do ?',

      buttons: [
        {
          text : 'Add ingredient',
          handler :() =>{
            console.log('Add ingredient');
                this.createNewIngredientAlert().present();
          }
        },
        {
          text: 'Remove all ingredients',
          role: 'destructive',
          handler : () => {

            const fArray: FormArray =   (<FormArray>this.recipeForm.get('ingredients'));
            const len =  fArray.length;
            if(len > 0){
              for(let i = len-1; i >= 0; i--){
                  fArray.removeAt(i);
              }
              this.presentToast('All Ingredients removed!');
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();

  }

presentToast(theMessage: string){
  let toast = this.toastCtrl.create({
    message: theMessage ,
    duration: 1500
  });
  toast.present();
}
  createNewIngredientAlert(){
  return this.alertCtrl.create({
   title: 'Add Ingredient',
   inputs: [
     {
       name: 'name',
       placeholder: 'Name'
     },
     {
      name: 'amount',
      placeholder: '2'
     }
   ],
   buttons: [
     {
       text: 'Cancel',
       role: 'cancel'
     },
     {
       text : 'Add',
       handler: data => {
         console.log('Data :  name : ' + data.name + ", amount : " + data.amount);
         if(data.name.trim() == '' ||data.name  == null){
            this.presentToast('Please enter a valid value!');
            return;
         }
        (<FormArray>this.recipeForm.get('ingredients')).push(
          new FormGroup({
            'name' :   new FormControl(data.name, Validators.required),
            'amount':   new FormControl(data.amount, Validators.required)
             })
        );

        this.presentToast('Ingredient added!');
       }
     }
   ]
 });

  }



  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
