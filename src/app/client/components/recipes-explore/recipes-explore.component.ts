import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../dialogs/post-dialog/post-dialog.component';
import { Router } from '@angular/router';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipes-explore',
  templateUrl: './recipes-explore.component.html',
  styleUrl: './recipes-explore.component.css',
})
export class RecipesExploreComponent {
  constructor(public dialog: MatDialog, public _router:Router, private _recipeService: RecipeService) {}
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

  openPostDialog() {
    if (!sessionStorage.getItem('username')) {
      this._router.navigate(['/signin']);
    }else{
      const dialogRef = this.dialog.open(PostDialogComponent, {
        width: '750px',
        height: '600px',
        data: {},
      });
  
      dialogRef.afterClosed().subscribe(
        (res) => {
          console.log(res);
          this._recipeService.postRecipe(res).subscribe(
            (res) => {
              console.log(res);
              this.ngOnInit();
            },
            (err) => console.log(err)
          );

        },
        (err) => console.log(err)
      );
    }
   
  }
}
