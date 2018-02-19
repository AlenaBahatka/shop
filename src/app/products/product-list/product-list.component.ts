import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { Product } from '../model/product.model';
import { ProductArrayService } from '../services/product-array.service';


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // use observable and promise to try async pipe in practice
  productListPromise: Promise<Product[]>;
  productsDeliveredObservable: Observable<number>;

  private productDelivered = 2;

  constructor(
    public router: Router,
    public productService: ProductArrayService
  ) { }

  ngOnInit() {
    this.productListPromise = this.productService.getProducts();
    this.productsDeliveredObservable = this.getProductsDeliveredObservable();
  }

  public viewMore(product: Product) {
    const link = ['/edit', product.id];
    this.router.navigate(link);
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
