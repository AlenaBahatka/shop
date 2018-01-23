import { Injectable } from '@angular/core';

import { CartItem } from '../cart-item/cart-item.model';
import { CartModule } from '../cart.module';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
  cartedProducts: Array<CartItem>; // products that were added to cart
  numberOfCartedItems: number; // number of all products in cart
  summ: number; // summ of all products in cart

  // Observable string sources
  private channel = new Subject<any>();
  // Observable string streams
  public channel$ = this.channel.asObservable();

  constructor() {
    // let user always has one item in cart (gift)
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

  addToCart(productId: number, productName: string, productPrice: number, quanity?: number) {
    this.addToCartedProducts(productId, productName, productPrice, quanity);
    this.updateNumAndSumm();
  }

  // delete product from cart
  deleteFromCart(cartItem) {
    this.deleteFromCartedProducts(cartItem);

    this.updateNumAndSumm();
  }

  private updateNumAndSumm() {
    this.calcNumAndSumm();
    this.channel.next({
      'cartedProducts': this.cartedProducts,
      'numberOfCartedItems': this.numberOfCartedItems,
      'summ': this.summ
    });
  }

  private calcNumAndSumm() {
    let summ = 0;
    let number = 0;
    this.cartedProducts.forEach(product => {
      summ += product.price * product.quantity;
      number += product.quantity;
    });
    this.summ = summ;
    this.numberOfCartedItems = number;
  }

  // add to cart product. can pass quantity but by default it is 1
  private addToCartedProducts(productId: number, productName: string, productPrice: number, productQuantity: number = 1) {
    let isAdded = false;
    this.cartedProducts.forEach(product => {
        // check if cart has already such product
        if (productId === product.id) {
            product.quantity += productQuantity;
            isAdded = true;
        }
    });
    if (!isAdded) { // if it is new product add to carted products as new product
      this.cartedProducts.unshift(new CartItem(productId, productName, productPrice, productQuantity));
    }
  }

  // delete product from carted
  private deleteFromCartedProducts(cartItem) {
    let indexOf;
    this.cartedProducts.forEach((product, index) => {
      if (cartItem === product.id) {
        indexOf = index;
      }
    });
    this.cartedProducts.splice(indexOf, 1);
  }
}
