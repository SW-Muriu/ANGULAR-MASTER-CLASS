import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInput: {nativeElement: {value: string}};
  @ViewChild('amountInput') amountInput: { nativeElement: { value: number } };
  
  newIngredient = []
  @Output() addedIngredient = new EventEmitter();


  
  onAddRecipe() {
    console.log(this.amountInput.nativeElement.value, this.nameInput.nativeElement.value);
    this.newIngredient.push(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    this.addedIngredient.emit(this.newIngredient)
}

}
