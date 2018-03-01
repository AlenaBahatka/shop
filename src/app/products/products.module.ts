import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductListComponent, ProductComponent, ProductFormComponent,
  ProductArrayService, ProductPromiseService } from '.';
import { ProductsRoutingModule } from './products.routing.module';
import { productsReducer, ProductsEffects, cartReducer, CartEffects } from '../+store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('products', productsReducer),
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([ProductsEffects, CartEffects]),
    ProductsRoutingModule
  ],
  declarations: [ProductComponent, ProductListComponent, ProductFormComponent],
  providers: [
    ProductArrayService,
    ProductPromiseService
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
