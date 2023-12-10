import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './client/layout/layout.component';
import { HomeHeroComponent } from './client/components/home-hero/home-hero.component';
import { HomeComponent } from './client/components/home/home.component';
import { HomeFeaturedComponent } from './client/components/home-featured/home-featured.component';
import { HomeCuisinesComponent } from './client/components/home-cuisines/home-cuisines.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { SigninComponent } from './shared/components/signin/signin.component';
import { RecipesExploreComponent } from './client/components/recipes-explore/recipes-explore.component';
import { CuisinesExploreComponent } from './client/components/cuisines-explore/cuisines-explore.component';
import { CuisineDetailsComponent } from './client/components/cuisine-details/cuisine-details.component';
import { RecipeDetailsComponent } from './client/components/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HomeHeroComponent,
    HomeFeaturedComponent,
    HomeCuisinesComponent,
    SignupComponent,
    SigninComponent,
    RecipesExploreComponent,
    CuisinesExploreComponent,
    CuisineDetailsComponent,
    RecipeDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
