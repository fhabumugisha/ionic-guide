
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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private actionSheetCtrl: ActionSheetController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.mode = this.navParams.get('mode');
    this.initializeForm();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipePage');
  }

  private initializeForm(){
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium',Validators.required ),
      'ingredients' : new FormArray([])

    });
  }

  onSubmit(){
    console.log(this.recipeForm);
    let value = this.recipeForm.value;
    let ingredients =  [];
    if(value.ingredients.length > 0){
      ingredients = value.ingredients.map(name => {
        return {name: name, amount: 1};
      });
    }
    let recipe = new Recipe(value.title, value.description, value.difficulty, value.ingredients);
    this.recipesService.addRecipe(recipe);
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
         if(data.name.trim() == '' ||data.name  == null){
            this.presentToast('Please enter a valid value!');
            return;
         }
        (<FormArray>this.recipeForm.get('ingredients')).push(new FormControl(data.name, Validators.required));
        this.presentToast('Ingredient added!');
       }
     }
   ]
 });

  }
}
