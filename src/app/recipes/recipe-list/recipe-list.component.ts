import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [];
    recipe = new Recipe("Dummy", "Dummy","https://www.worldwidedisplays.co.uk/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/6/k/6k2033_6k20722.jpg" )
  constructor() { }

  ngOnInit() {
  }

}
