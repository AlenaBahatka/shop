import { Component, OnInit } from '@angular/core';
// ngrx
import { Store } from '@ngrx/store';

import { Product } from '../../products/model/product.model';
import { AppState } from '../../+store';
import * as ProductsActions from './../../+store/actions/products.actions';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  product: Product;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.product = new Product(null, '', '', null);
  }

  saveProduct() {
    console.log('SAVED PRODUCT');
    const product = {...this.product};
    product.id = Math.floor(Math.random() * 100) + 1; // generate id for product
    this.store.dispatch(new ProductsActions.CreateProduct(product));
    alert('Product added');
  }
}
