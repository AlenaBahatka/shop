import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { Product } from '../model/product.model';
import { ProductArrayService, ProductPromiseService } from '../services';
import { CartService, CartObservableService } from '../../cart';
import { CartItem } from '../../cart/models/cart-item.model';
import { Subscription } from 'rxjs/Subscription';


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  // use observable and promise to try async pipe in practice
  productListPromise: Promise<Product[]>;
  productsDeliveredObservable: Observable<number>;

  private productDelivered = 2;
  private sub: Subscription;

  constructor(
    public router: Router,
    public productService: ProductArrayService,
    public productPromiseService: ProductPromiseService,
    public cartService: CartService,
    public cartObservableService: CartObservableService
  ) { }

  ngOnInit() {
    // this.productListPromise = this.productService.getProducts();
    this.productListPromise = this.productPromiseService.getProducts();
    this.productsDeliveredObservable = this.getProductsDeliveredObservable();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public viewMore(product: Product) {
    const link = ['/viewmore', product.id];
    this.router.navigate(link);
  }

  public addToCart (product: Product)  {
    // this.cartService.addToCart(product.id, product.name, product.price);
    this.sub = this.cartObservableService
    .addToCart(new CartItem(product.id, product.name, product.price, 1)).subscribe(
      (data) => {
        console.log('Product was added to cart', data);
      },
      (error) => console.log(error)
    );
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
