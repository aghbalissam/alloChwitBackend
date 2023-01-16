import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent
    ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
