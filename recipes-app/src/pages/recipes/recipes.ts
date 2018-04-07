import { Recipe } from "./../../models/recipe";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  PopoverController,
  ToastController
} from "ionic-angular";
import { DetailRecipePage } from "./../detail-recipe/detail-recipe";
import { EditRecipePage } from "./../edit-recipe/edit-recipe";
import { RecipesService } from "../../services/recipes";
import { AuthService } from "../../services/auth";
import { DBOptionsPage } from "./../database-options/database-options";

@IonicPage()
@Component({
  selector: "page-recipes",
  templateUrl: "recipes.html"
})
export class RecipesPage {
  recipeDetail = DetailRecipePage;
  recipes: Recipe[] = [];
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private recipesService: RecipesService,
    private popoverCtrl: PopoverController,
    private authService: AuthService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RecipesPage");
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getRecipes();
  }
  onAddNewRecipe() {
    this.navCtrl.push(
      EditRecipePage,
      { mode: "New" },
      {
        animate: true,
        direction: "forward",
        easing: "ease-out",
        duration: 2000,
        animation: "md-transition"
      }
    );
  }

  onLoadRecipe(recipe: Recipe, index: number) {
    console.log("recipe : " + recipe);
    this.navCtrl.push(DetailRecipePage, { recipe: recipe, index: index });
  }

  /**
   *
   * @param event
   */
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
            this.recipesService.fecthRecipes(token).subscribe(
              (list: Recipe[]) => {
                if (list) {
                  this.recipes = list;
                } else {
                  this.recipes = [];
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
            this.recipesService.storeRecipes(token).subscribe(
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
