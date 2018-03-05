import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CartListComponent, CartItemComponent, CartComponent } from '.';
import { OrderByPipe } from './order-by.pipe';
import { CartService, CartObservableService } from './services';
import { CartRoutingModule, cartRouterComponents } from './cart.routing.module';
import { cartReducer, CartEffects } from '../+store';
import { ProcessOrderFormComponent } from './reactive-forms/process-order-form/process-order-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CartRoutingModule,
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects])
  ],
  declarations: [cartRouterComponents,
    CartItemComponent, CartListComponent, OrderByPipe,
    CartComponent, ProcessOrderFormComponent],
  providers: [CartService, CartObservableService],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
