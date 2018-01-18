import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService } from './service/cart.service';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartItemComponent, CartListComponent],
  providers: [CartService],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
