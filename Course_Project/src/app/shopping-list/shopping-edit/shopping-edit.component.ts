import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {


  @ViewChild('nameInput') nameInput: {nativeElement: {value: string}};
  @ViewChild('amountInput') amountInput: { nativeElement: { value: number } };
  
  newIngredient: Ingredient ;

  constructor(private shoppingListService: ShoppingListService) { };

  
  onAddRecipe() {
    console.log(this.amountInput.nativeElement.value, this.nameInput.nativeElement.value);
    this.newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.shoppingListService.addedIngredient.emit(this.newIngredient);
    this.shoppingListService.onAddIngredient(this.newIngredient)

  }
  

}
