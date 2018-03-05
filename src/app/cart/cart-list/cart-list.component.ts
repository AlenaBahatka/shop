import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
// rxjs
import { Subscription } from 'rxjs/Subscription';
// ngrx
import { Store } from '@ngrx/store';

import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item.model';
import { CartObservableService } from '../services/';
import { Cart } from '../models/cart.model';
import { AppState, getCartedItems, getCartError } from '../../+store';
import * as CartActions from './../../+store/actions/cart.actions';
import * as RouterActions from './../../+store/actions/router.actions';

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

  cartedItems$: Store<Array<CartItem>>;
  cartError$: Store<Error | string>;

  constructor(
    public cartService: CartService,
    public cartObservableService: CartObservableService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // remove this sub but firstly add properties to state
    // this.sub = this.cartObservableService.getCartedItems().subscribe(
    //   (data: CartItem[]) => {
    //     console.log('Get cart from db', data);
    //     this.cartList = data;
    //     this.numberOfCartedItems = this.cartService.getNumberOfCartedItems(data);
    //     this.summ = this.cartService.getSumm(data);
    //   }
    // );

    this.cartedItems$ = this.store.select(getCartedItems);
    this.cartError$ = this.store.select(getCartError);
    this.store.dispatch(new CartActions.GetCartedItems());
  }

  onCartItemDelete(cartItem) {
    this.store.dispatch(new CartActions.DeleteCartedItem(cartItem));
  }

  ngOnDestroy() {
   // this.sub.unsubscribe();
  }

  private nextStepUserDetails () {
    const link = ['cart/userdetails'];

    this.store.dispatch(new RouterActions.Go({
      path: link
    }));
  }
}
