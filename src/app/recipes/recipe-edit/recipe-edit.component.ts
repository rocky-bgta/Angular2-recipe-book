import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray} from "@angular/forms";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private subsciption: Subscription;
  private recipeIndex: number;
  private recipe: Recipe;
  private isName = true;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit(){
    let isNew = true;
    this.subsciption = this.route.params.subscribe(
      (params: any)=> {

        if(params.hasOwnProperty('id')){
          isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }
        else{
          isNew = true;
          this.recipe = null;
        }
      }
    );
  }

  ngOnDestroy(){
    this.subsciption.unsubscribe();
  }

  private initForm(isNew: boolean){

    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

  }

}
