import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SingleRestaurantComponent } from './single-restaurant/single-restaurant.component';

const routes: Routes = [
  {
    path : 'faq',
    component: FaqComponent 
  },
  {
    path : ':city/restaurants',
    component : RestaurantsComponent
  },
  {
    path : '404',
    component : ErrorComponent
  },
  {
    // this (city) will be generate 
    path : ':city/restaurants/:slogan',
    component : SingleRestaurantComponent
  },
  {
    path : 'account',
    component : AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
