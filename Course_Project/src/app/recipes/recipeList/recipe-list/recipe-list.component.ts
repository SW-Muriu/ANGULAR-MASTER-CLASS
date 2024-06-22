import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[]; 
  // @Output() importedRecipe = new EventEmitter<Recipe>();

  constructor(
    private recipeService: RecipeService,
  ) { }

  // onRecipeSelected(recipeSelected: Recipe) {
  //   this.importedRecipe.emit(recipeSelected)
  // }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


}
