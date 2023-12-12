import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  constructor(private _route:ActivatedRoute, private _recipeService:RecipeService) {}
  recipe: any;
  ngOnInit(): void {
    const routeParams = this._route.snapshot.paramMap;
    const recipeIdFromRoute = Number(routeParams.get('recipeId'));

    this._recipeService.getRecipeById(recipeIdFromRoute).subscribe(
      (res) => {
        console.log(res)
        this.recipe = res
        console.log(this.recipe);
        ;
      },
      (err) => console.log(err)
    );
    
  }
}
