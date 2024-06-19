import { Ingredient } from "../shared/ingredients.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient [];

    //Aids in instantiating the object
    constructor(name: string, desc: string, imagePath: string, ingredients) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients
    }
}