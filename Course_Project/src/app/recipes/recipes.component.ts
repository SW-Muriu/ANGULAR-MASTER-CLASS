import { Component } from '@angular/core';
import { Recipe } from './recipes.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

 
  selectedRecipe$: Recipe;


  constructor() { }
}
