
import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {RecipesItemComponent} from './recipes-list/recipes-item/recipes-item.component';
import {DropdownDirective} from '../directives/dropdown.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ RecipesComponent,
  RecipeStartComponent,
  RecipesListComponent,
  RecipesListComponent,
  RecipeEditComponent,
  RecipesDetailComponent,
  RecipesItemComponent
  ],
  imports: [ CommonModule,
    ReactiveFormsModule]
})
export class RecipeModule {

}