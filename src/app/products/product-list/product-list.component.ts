import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { Product } from '../product/product.model';
import { ProductService } from '../../services/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // use observable and promise to try async pipe in practice
  productListPromise: Promise<Product[]>;
  productsDeliveredObservable: Observable<number>;

  private productDelivered = 2;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productListPromise = this.productService.getProducts();
    this.productsDeliveredObservable = this.getProductsDeliveredObservable();
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
