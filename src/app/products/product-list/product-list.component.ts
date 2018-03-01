import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
// ngrx
import { Store } from '@ngrx/store';

import { Product } from '../model/product.model';
import { CartItem } from '../../cart/models/cart-item.model';
import { AppState, getProductsData, getProductsError } from '../../+store';
import * as ProductsActions from './../../+store/actions/products.actions';
import * as CartActions from './../../+store/actions/cart.actions';
import * as RouterActions from './../../+store/actions/router.actions';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // use observable and promise to try async pipe in practice
  productsDeliveredObservable: Observable<number>;

  products$: Store<ReadonlyArray<Product>>;
  productsError$: Store<Error | string>;

  private productDelivered = 2;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.products$ = this.store.select(getProductsData);
    this.productsError$ = this.store.select(getProductsError);

    this.store.dispatch(new ProductsActions.GetProducts());
    this.productsDeliveredObservable = this.getProductsDeliveredObservable();
  }

  public viewMore(product: Product) {
    const link = ['/viewmore', product.id];

    this.store.dispatch(new RouterActions.Go({
      path: link
    }));
  }

  public addToCart (product: Product)  {
    this.store.dispatch(new CartActions.AddItemToCart
      (new CartItem(product.id, product.name, product.price, 1)));
  }

  private getProductsDeliveredObservable () {
    return new Observable<number>((observer: Subscriber<number>) => {
      setInterval(() => {
        observer.next(this.getNumber());
      }, 5000);
    });
  }

  private getNumber (): number {
    this.productDelivered += Math.floor(Math.random() * 6) + 1  ;
    return this.productDelivered;
  }
}
