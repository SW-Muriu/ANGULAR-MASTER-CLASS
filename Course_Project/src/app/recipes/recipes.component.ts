import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css', 
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{


  selectedRecipe$: Recipe;


  constructor(
    private recipeService: RecipeService
  ) { }


  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe({
      next: (recipe: Recipe) => {
        this.selectedRecipe$ = recipe;
        }
      })
  }
}
