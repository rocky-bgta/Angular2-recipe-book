import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
        new Recipe("Dummy", "Dummy","https://www.worldwidedisplays.co.uk/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/6/k/6k2033_6k20722.jpg",[] ),
        new Recipe("Dummy", "Dummy","https://www.worldwidedisplays.co.uk/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/6/k/6k2033_6k20722.jpg",[] )
    ];

  constructor() { }

  getRecipes(){
      return this.recipes;
  }

}
