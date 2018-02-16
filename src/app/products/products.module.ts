import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListComponent, ProductComponent, ProductFormComponent, ProductArrayService } from '.';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  declarations: [ProductComponent, ProductListComponent, ProductFormComponent],
  providers: [ProductArrayService],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
