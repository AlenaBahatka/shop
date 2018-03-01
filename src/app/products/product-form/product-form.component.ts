import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// rxjs
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
// ngrx
import { Store } from '@ngrx/store';

import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { ProductArrayService } from '../services/product-array.service';
import { ProductPromiseService } from '../services/product-promise.service';
import { ProductsState, AppState, getProductsState, getSelectedProduct } from '../../+store';
import * as ProductsActions from './../../+store/actions/products.actions';
import * as RouterActions from './../../+store/actions/router.actions';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  product: Product;

  private sub: Subscription;

  constructor(
    private productArrayService: ProductArrayService,
    private productPromiseService: ProductPromiseService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.product = new Product(null, '', '', null);
    this.sub = this.store.select(getSelectedProduct)
      .subscribe(product => this.product = product);

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.store.dispatch(new ProductsActions.GetProduct(+id));
      }
    });
  }

  // create button on template to save peoduct
  saveProduct() {
    const product = {...this.product};
    console.log('SAVE PRODUCT');
    if (product.id) {
      this.productArrayService.updateProduct(product);
    } else {
      this.productArrayService.addProduct(product);
    }
    this.goBack();
  }

  goBack(): void {
    this.store.dispatch(new RouterActions.Back());
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
