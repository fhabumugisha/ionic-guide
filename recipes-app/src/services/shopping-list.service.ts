import { Ingredient } from "../models/ingredient";

export class ShoppingListService {
  ingredients: Ingredient[] = [];

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
}
