import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../SharedModel/Ingredient.model';

@Injectable()
export class ShoppingListService {

  constructor() { }

  ingredientsChanged = new EventEmitter<IngredientModel[]>();
  private _ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Pinapple', 3),
    new IngredientModel('Tomatoes', 4)

  ];


  get ingredients(): IngredientModel[] {
    return this._ingredients;
  }

  addIngredient(ingredient: IngredientModel) {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.emit(this._ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this._ingredients.slice());
    }


}
