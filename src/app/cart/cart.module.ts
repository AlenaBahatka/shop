import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartListComponent, CartItemComponent, CartComponent } from '.';
import { OrderByPipe } from './order-by.pipe';
import { CartService, CartObservableService } from './services';
import { CartRoutingModule, cartRouterComponents } from './cart.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule
  ],
  declarations: [cartRouterComponents, CartItemComponent, CartListComponent, OrderByPipe, CartComponent],
  providers: [CartService, CartObservableService],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
