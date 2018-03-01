import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CartListComponent, CartItemComponent, CartComponent } from '.';
import { OrderByPipe } from './order-by.pipe';
import { CartService, CartObservableService } from './services';
import { CartRoutingModule, cartRouterComponents } from './cart.routing.module';
import { cartReducer, CartEffects } from '../+store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule,
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects])
  ],
  declarations: [cartRouterComponents, CartItemComponent, CartListComponent, OrderByPipe, CartComponent],
  providers: [CartService, CartObservableService],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
