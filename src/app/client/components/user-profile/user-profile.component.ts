import { Component } from '@angular/core';
import { EditProfileDialogComponent } from '../dialogs/edit-profile-dialog/edit-profile-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  constructor(public dialog: MatDialog,private _router:Router, private _route:ActivatedRoute, private _userService:UserService, private _recipeService:RecipeService) {}
  user:any;
  newuser:any={
    username:"",
    firstname:"",
    lastname:"",
    email:"",
    profilePicture:"",
    description:"",
    password:"",
    id:""
  };
  searchTextChanged: any;
  userRecipes:any;
  ngOnInit(): void {
    const routeParams = this._route.snapshot.paramMap;
    const usernameFromRoute = String(routeParams.get('username'));
    this._userService.getUser(usernameFromRoute).subscribe(
      (res) => {
        //console.log(res);
        this.user = res;
      },
      (err) => console.log(err)
    );
    this._recipeService.getRecipeByUsername(usernameFromRoute).subscribe(
      (res) => {
        //console.log(res);
        this.userRecipes = res;
      },
      (err) => console.log(err)
    );

  }
  
  opneEditProfileDialog(): void {
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
      width: '750px',
        height: '600px',
        data: {user:this.user},
    }
    );
    dialogRef.afterClosed().subscribe(
      (res) => {
        console.log(res.user.id);
       
      },
      (err) => console.log(err)
    );
 
  }

  logout() {
    sessionStorage.clear();
    this._router.navigate(['/home']);
  }
}
