import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './client/layout/layout.component';
import { HomeHeroComponent } from './client/components/home-hero/home-hero.component';
import { HomeComponent } from './client/components/home/home.component';
import { HomeFeaturedComponent } from './client/components/home-featured/home-featured.component';
import { HomeCuisinesComponent } from './client/components/home-cuisines/home-cuisines.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HomeHeroComponent,
    HomeFeaturedComponent,
    HomeCuisinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
