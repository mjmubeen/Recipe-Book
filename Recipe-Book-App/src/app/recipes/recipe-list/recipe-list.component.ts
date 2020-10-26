import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  Recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simple a test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdesigqHJ_Zt27t_FpsKmqwOeNPMoQX9yWmQ&usqp=CAU')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
