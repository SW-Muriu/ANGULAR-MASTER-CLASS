import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>()

    addedIngredient = new EventEmitter<any>();

    private ingredients: Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient('tomatoes', 10)
    ];

    

    getIngredients() {
        return this.ingredients.slice();
    }

    onAddIngredient(data: Ingredient) {
        this.ingredients.push(data);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }


    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.ingredients.push(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}