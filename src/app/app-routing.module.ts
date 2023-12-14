// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './client/layout/layout.component';
import { HomeComponent } from './client/components/home/home.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { SigninComponent } from './shared/components/signin/signin.component';
import { RecipesExploreComponent } from './client/components/recipes-explore/recipes-explore.component';
import { CuisinesExploreComponent } from './client/components/cuisines-explore/cuisines-explore.component';
import { RecipeDetailsComponent } from './client/components/recipe-details/recipe-details.component';
import { UserProfileComponent } from './client/components/user-profile/user-profile.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, title:'DishDiscovery | Home' },
      { path: 'recipes', component: RecipesExploreComponent ,title:'DishDiscovery | Explore Recipes'},
      { path: 'recipes/:recipeId', component: RecipeDetailsComponent , title:'DishDiscovery | '+':recipeId'+'Recipe Details'},
      { path: 'cuisines', component: CuisinesExploreComponent, title:'DishDiscovery | Featured Cuisines' },
      { path: 'userprofile', component: UserProfileComponent, title:'DishDiscovery | User Profile' },
    ],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
