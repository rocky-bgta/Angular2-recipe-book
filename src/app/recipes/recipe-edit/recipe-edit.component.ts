import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private subsciption: Subscription;
  private recipeIndex: number;
  private recipe: Recipe;
  private isNew:boolean = true;
  private recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.subsciption = this.route.params.subscribe(
      (params: any)=> {

        if(params.hasOwnProperty('id')){
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }
        else{
            this.isNew = true;
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

    if(!this.isNew){
        for(let i; i<this.recipe.ingredients.length; i++){
            recipeIngredients.push(
                new FormGroup({
                    name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
                    amount: new FormControl(this.recipe.ingredients[i].amount, [
                        Validators.required,
                        Validators.pattern("\\d+")
                    ])
                })
            );
        }

        recipeName = this.recipe.name;
        recipeImageUrl = this.recipe.imagePath;
        recipeContent = this.recipe.description;
    }

      this.recipeForm = this.formBuilder.group({
              name: [recipeName, Validators.required],
              imagePath: [recipeImageUrl, Validators.required],
              description: [recipeContent, Validators.required],
              ingredients: recipeIngredients
          }
      )
  }

}
