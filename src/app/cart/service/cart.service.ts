import { Injectable } from '@angular/core';

import { CartItem } from '../cart-item/cart-item.model';
import { CartModule } from '../cart.module';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
  cartedProducts: Array<CartItem>;
  numberOfCartedItems: number;
  summ: number;

  // Observable string sources
  private channel = new Subject<any>();
  // Observable string streams
  public channel$ = this.channel.asObservable();

  constructor() {
    this.cartedProducts = [new CartItem(112, 'Gift', 0, 1)];
    this.summ = 0;
    this.numberOfCartedItems = 1;
  }

  getCartedItems() {
    return this.cartedProducts;
  }

  getNumberOfCartedItems() {
    return this.numberOfCartedItems;
  }
  getSumm() {
    return this.summ;
  }

  addToCart(productId: number, productName: string, productPrice: number) {
    this.addToCartedProducts(productId, productName, productPrice);
    this.calcNumAndSumm();
    this.channel.next({
      'cartedProducts': this.cartedProducts,
      'numberOfCartedItems': this.numberOfCartedItems,
      'summ': this.summ
    });
  }

  calcNumAndSumm() {
    console.log(this.cartedProducts);
    let summ = 0;
    let number = 0;
    this.cartedProducts.forEach(product => {
      summ += product.price * product.quantity;
      number += product.quantity;
    });
    this.summ = summ;
    this.numberOfCartedItems = number;
  }

  addToCartedProducts(productId: number, productName: string, productPrice: number) {
    let isAdded = false;
    this.cartedProducts.forEach(product => {
        if (productId === product.id) {
            product.quantity++;
            isAdded = true;
        }
    });
    if (!isAdded) {
      this.cartedProducts.unshift(new CartItem(productId, productName, productPrice, 1));
    }
  }

  deleteFromCartedProducts(cartItem) {
    let indexOf;
    let summ;
    let quantity;
    this.cartedProducts.forEach((product, index) => {
      if (cartItem === product.id) {
        indexOf = index;
        summ = product.price * product.quantity;
        quantity = product.quantity;
      }
    });
    this.cartedProducts.splice(indexOf, 1);
    this.summ -= summ;
    this.numberOfCartedItems -= quantity;
    this.channel.next({
      'cartedProducts': this.cartedProducts,
      'numberOfCartedItems': this.numberOfCartedItems,
      'summ': this.summ
    });
  }

}
