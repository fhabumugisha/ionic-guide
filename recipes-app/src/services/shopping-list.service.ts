import { Ingredient } from "../models/ingredient";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth";

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [];

  constructor(private http: HttpClient,
  private authService: AuthService){}

  /**
   *
   * @param ingredient
   */
addIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
  console.log(this.ingredients);
}

addItem(name: string, amount: number){
  this.ingredients.push(new Ingredient(name, amount));
  console.log(this.ingredients);
}
/**
 *
 * @param ingredients
 */
addIngredients(ingredients: Ingredient[]){
  this.ingredients.push(...ingredients);
  console.log(this.ingredients);
}
/**
 *
 */
getIngredients(){
  return this.ingredients.slice();
}
getIngredient(index: number){
 // this.ingredients.find(index);
}
/**
 *
 * @param ingredient
 */
removeIngredient(ingredient: Ingredient){
  const position = this.ingredients.findIndex((ingrEl: Ingredient) => {
    return ingrEl.name == ingredient.name;
  });
  this.ingredients.splice(position, 1);
}
/**
 *
 * @param index
 */
removeItem(index: number){
  this.ingredients.splice(index, 1);
}

storeList(token: string){
  const userId = this.authService.getActiveUser().uid;
 return this.http.put('https://ion-recipes-book.firebaseio.com/' + userId + '/shopping-list.json?auth='+token, this.ingredients);
}

fecthList(token: string){
  const userId = this.authService.getActiveUser().uid;
  return this.http.get('https://ion-recipes-book.firebaseio.com/' + userId + '/shopping-list.json?auth='+token)
  .subscribe(
    (data : Ingredient[]) => {
      this.ingredients = data;
    }
  );

}
}
