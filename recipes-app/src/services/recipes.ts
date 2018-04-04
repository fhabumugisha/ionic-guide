import { Recipe } from './../models/recipe';


export class RecipesService{

 private recipes: Recipe[] = [];

  addRecipe(recipe : Recipe){
    this.recipes.push(recipe);
    console.log(this.recipes);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
  }


  updateRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
  }



}
