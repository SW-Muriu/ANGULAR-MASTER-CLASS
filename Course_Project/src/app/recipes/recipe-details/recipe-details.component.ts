import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit{

  @Input() currentRecipe: Recipe;

  constructor(
    private recipeService: RecipeService
  ) {
    
  }

  ngOnInit(): void {
      
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.currentRecipe.ingredients);
    
  }

}
