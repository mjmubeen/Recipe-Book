import { Ingredient } from './../shared/ingredient.model';
export class Recipe{
  constructor(public name?: string, public description?: string,
              public imagePath?: string, public ingredient?: Ingredient[]){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredient = ingredient;
  }
}
