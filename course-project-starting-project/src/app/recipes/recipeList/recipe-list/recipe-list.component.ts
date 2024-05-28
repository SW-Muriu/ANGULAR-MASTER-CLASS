import { Component } from '@angular/core';
import { Recipe } from '../../recipes.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("A test Title", "A recipe Descroption", 'https://wallpaperaccess.com/full/3691432.jpg'),
    new Recipe("A test Title", "A recipe Descroption", 'https://wallpaperaccess.com/full/3691432.jpg')

  ];
  constructor(){}
}
