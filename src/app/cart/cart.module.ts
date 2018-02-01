import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartService } from '../services/cart.service';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartItemComponent, CartListComponent, OrderByPipe],
  providers: [CartService],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
