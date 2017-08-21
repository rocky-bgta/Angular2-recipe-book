import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";


const APP_ROUTES: Routes=[
    {path: 'recipes', component: RecipesComponent},
    {path: 'shopping-list', component:ShoppingListComponent},
    {path: '**', redirectTo:'/recipes', pathMatch: 'full'},
]



export const routing = RouterModule.forRoot(APP_ROUTES);