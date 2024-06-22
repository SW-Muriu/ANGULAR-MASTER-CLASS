import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{



    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "A test Title",
            "A recipe Description",
            'https://wallpaperaccess.com/full/3691432.jpg',
            [
                new Ingredient("Carrots", 4),
                new Ingredient("Tomatoes", 6)]),
        new Recipe(
            "Another test Title",
            "A recipe Description",
            'https://wallpaperaccess.com/full/3691432.jpg',
            [
                new Ingredient("Bologne", 3),
                new Ingredient("Fitza", 5)
            ])
    
    ];


    constructor(
        private shoppingListService: ShoppingListService
    ){}



    getRecipes() {
        return this.recipes.slice();
    }


    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}