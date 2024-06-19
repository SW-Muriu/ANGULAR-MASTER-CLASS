import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

  constructor(private recipeService: RecipeService){}

  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();


  onSelect() {
    // this.recipeSelected.emit()
    this.recipeService.recipeSelected.emit(this.recipe)

  }

}
