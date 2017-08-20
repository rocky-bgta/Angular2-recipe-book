import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
        new Recipe("Salad_platter", "Very testy","https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg",[
            new Ingredient('French Fries',2),
            new Ingredient('Cow Meet',1)
        ] ),
        new Recipe("waldorf-salad-horiz", "Low Price","http://assets.simplyrecipes.com/wp-content/uploads/2007/10/waldorf-salad-horiz-a-1500.jpg",[] )
    ];

  constructor() { }

  getRecipes(){
      return this.recipes;
  }

}
