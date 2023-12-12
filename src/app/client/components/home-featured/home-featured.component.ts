import { Component } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-home-featured',
  templateUrl: './home-featured.component.html',
  styleUrl: './home-featured.component.css'
})
export class HomeFeaturedComponent {
  constructor(private _recipeService: RecipeService) {}
  recipes: any;
  ngOnInit(): void {
    this._recipeService.getRecipes().subscribe(
      (res) => {
        console.log(res)
        this.recipes = res
        console.log(this.recipes);
        ;
      },
      (err) => console.log(err)
    );
  }

}
