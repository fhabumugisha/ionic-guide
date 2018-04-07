import { Recipe } from "./../models/recipe";

import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { AuthService } from "./auth";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    console.log(this.recipes);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
  }

  storeRecipes(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.put(
      "https://ion-recipes-book.firebaseio.com/" +
        userId +
        "/recipes.json?auth=" +
        token,
      this.recipes
    );
  }

  fecthRecipes(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http
      .get(
        "https://ion-recipes-book.firebaseio.com/" +
          userId +
          "/recipes.json?auth=" +
          token
      )
      .map((dataRecipes: Recipe[]) => {
        for (const recipe of dataRecipes) {
          if (!recipe["ingredients"]) {
            recipe["ingredients"] = [];
          }
        }
        return dataRecipes;
      })
      .do((data: Recipe[]) => {
        if (data) {
          this.recipes = data;
        } else {
          this.recipes = [];
        }
      });
  }
}
