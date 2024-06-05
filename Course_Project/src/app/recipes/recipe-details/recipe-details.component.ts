import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.module';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {

  @Input() currentRecipe: Recipe

}
