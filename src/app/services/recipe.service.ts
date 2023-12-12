import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private _getRecipeUrl = "http://localhost:8080/api/v1/recipe";
  private _postRecipeUrl = "http://localhost:8080/api/v1/recipe";
  private _getRecipeByIdUrl = "http://localhost:8080/api/v1/recipe/{recipeId}";

  constructor(private _http: HttpClient) { }

  getRecipes(){
    return this._http.get<any>(this._getRecipeUrl);
  }

  postRecipe(recipe: any){
    return this._http.post<any>(this._postRecipeUrl, recipe);
  }

  getRecipeById(recipeId: number){
    return this._http.get<any>(this._getRecipeByIdUrl.replace('{recipeId}', recipeId.toString()));
  }
}
