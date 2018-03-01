import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// ngrx
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
// rxjs
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { ProductPromiseService } from '../../products/services';
import * as ProductsActions from './../../+store/actions/products.actions';
import { ProductsActionTypes } from '../actions/products.actions';
import * as RouterActions from './../actions/router.actions';

@Injectable()
export class ProductsEffects {
  @Effect() getProducts$: Observable<Action> = this.actions$
  .ofType<ProductsActions.GetProducts>(ProductsActionTypes.GET_PRODUCTS)
  .pipe(
    switchMap(action =>
      this.productPromiseService.getProducts()
        .then(products => new ProductsActions.GetProductsSuccess(products) )
        .catch(err => new ProductsActions.GetProductsError(err))
    )
  );

  @Effect() getProduct$: Observable<Action> = this.actions$
  .ofType<ProductsActions.GetProduct>(ProductsActionTypes.GET_PRODUCT)
  .pipe(
    map((action: ProductsActions.GetProduct) => action.payload),
    switchMap(payload =>
      this.productPromiseService.getProduct(+payload)
        .then(product => new ProductsActions.GetProductSuccess(product) )
        .catch(err => new ProductsActions.GetProductError(err))
    )
  );

  @Effect() createProduct$: Observable<Action> = this.actions$
  .ofType<ProductsActions.CreateProduct>(ProductsActionTypes.CREATE_PRODUCT)
  .pipe(
    map((action: ProductsActions.CreateProduct) => action.payload),
    switchMap(payload =>
      this.productPromiseService.addProduct(payload)
        .then(product => {
          return new ProductsActions.CreateProductSuccess(product);
        })
        .catch(err => new ProductsActions.CreateProductError(err))
    )
  );

  @Effect() createProductSuccess$: Observable<Action> = this.actions$
    .ofType<ProductsActions.CreateProduct>(
      ProductsActionTypes.CREATE_PRODUCT_SUCCESS,
    )
    .pipe(
      map(action => new RouterActions.Go({
        path: ['/home']
      }))
    );

  constructor(
    private actions$: Actions,
    private productPromiseService: ProductPromiseService,
    private router: Router
  ) {
    console.log('[PRODUCTS EFFECTS]');
  }
}
