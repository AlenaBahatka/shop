import { Injectable } from '@angular/core';

// ngrx
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as CartActions from './../actions/cart.actions';
import { CartedItemsActionTypes } from './../actions/cart.actions';
import { CartObservableService } from '../../cart/services';

@Injectable()
export class CartEffects {

    @Effect() getCartedItems$: Observable<Action> = this.actions$
        .ofType<CartActions.GetCartedItems>(CartedItemsActionTypes.GET_CARTED_ITEMS)
        .pipe(
            switchMap(action =>
                this.cartObservableService.getCartedItems()
                .pipe(
                    map(cartedItems => new CartActions.GetCartedItemsSuccess(cartedItems)),
                    catchError(err => of(new CartActions.GetCartedItemsError(err)))
                )
            )
        );

    @Effect() deleteCartedItem$: Observable<Action> = this.actions$
        .ofType<CartActions.DeleteCartedItem>(CartedItemsActionTypes.DELETE_CARTED_ITEM)
        .pipe(
        map((action: CartActions.DeleteCartedItem) => action.payload),
        switchMap(payload =>
            this.cartObservableService.deleteFromCart(payload)
            .pipe(
                map(() => new CartActions.DeleteCartedItemSuccess(payload)),
                catchError(err => of(new CartActions.DeleteCartedItemError(err)))
            )
        )
        );

    @Effect() addItemToCart$: Observable<Action> = this.actions$
    .ofType<CartActions.AddItemToCart>(CartedItemsActionTypes.ADD_ITEM_TO_CART)
    .pipe(
        map((action: CartActions.AddItemToCart) => action.payload),
        switchMap(payload =>
        this.cartObservableService.addToCart(payload)
        .pipe(
            map(cartItem => {
                return new CartActions.AddItemToCartSuccess(cartItem);
            }),
            catchError(err => of(new CartActions.AddItemToCartSuccess(err)))
        )
        )
    );

    constructor(
        private actions$: Actions,
        private cartObservableService: CartObservableService,
    ) {
        console.log('[CART EFFECTS]');
    }
}
