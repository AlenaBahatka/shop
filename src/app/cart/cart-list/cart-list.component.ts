import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  cartList: Array<CartItem>;
  numberOfCartedItems: number;
  summ: number;
  sub: Subscription;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartList = this.cartService.getCartedItems();
    this.numberOfCartedItems = this.cartService.getNumberOfCartedItems();
    this.summ = this.cartService.getSumm();
    this.sub = this.cartService.channel$.subscribe(
      data => {
        this.cartList = data.cartedProducts;
        this.numberOfCartedItems = data.numberOfCartedItems;
        this.summ = data.summ;
      });
  }

  onCartItemDelete(cartItem) {
    this.cartService.deleteFromCart(cartItem.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
