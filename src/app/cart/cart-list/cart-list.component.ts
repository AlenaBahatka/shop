import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item.model';
import { CartObservableService } from '../services/';
import { Data } from '@angular/router';
import { Cart } from '../models/cart.model';

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

  constructor(public cartService: CartService,
  public cartObservableService: CartObservableService) { }

  ngOnInit() {
    this.sub = this.cartObservableService.getCartedItems().subscribe(
      (data: CartItem[]) => {
        console.log('Get cart from db', data);
        this.cartList = data;
        this.numberOfCartedItems = this.cartService.getNumberOfCartedItems(data);
        this.summ = this.cartService.getSumm(data);
      }
    );
  }

  onCartItemDelete(cartItem) {
    // this.cartService.deleteFromCart(cartItem.id);
    this.cartObservableService.deleteFromCart(cartItem).subscribe(
      (data) => {
        this.cartList = data;
        this.numberOfCartedItems = this.cartService.getNumberOfCartedItems(data);
        this.summ = this.cartService.getSumm(data);
      }
    ) ;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
