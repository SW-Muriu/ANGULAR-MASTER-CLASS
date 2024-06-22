import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { };

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe({
      next: (emitedData: Ingredient[]) => {
        this.ingredients = emitedData;
      }
    })
  }

  onAddIngredient() {
    this.shoppingListService.addedIngredient.subscribe({
      next: (ingredientData) => {
        console.log("ingredientData: ", ingredientData);
        
        this.ingredients.push(new Ingredient(ingredientData[0], ingredientData[1]));
      }
    })

  }
}
