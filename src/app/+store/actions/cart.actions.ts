import { Action } from '@ngrx/store';
import { CartItem } from '../../cart/models/cart-item.model';

// Cart Actions
export class CartedItemsActionTypes {
    static readonly GET_CARTED_ITEMS =              '[Cart] GET_CARTED_ITEMS';
    static readonly GET_CARTED_ITEMS_SUCCESS =      '[Cart] GET_CARTED_ITEMS_SUCCESS';
    static readonly GET_CARTED_ITEMS_ERROR =        '[Cart] GET_CARTED_ITEMS_ERROR';
    static readonly ADD_ITEM_TO_CART =              '[Cart] ADD_ITEM_TO_CART';
    static readonly ADD_ITEM_TO_CART_SUCCESS =      '[Cart] ADD_ITEM_TO_CART_SUCCESS';
    static readonly ADD_ITEM_TO_CART_ERROR   =      '[Cart] ADD_ITEM_TO_CART_ERROR';
    static readonly DELETE_CARTED_ITEM =            '[Cart] DELETE_CARTED_ITEM';
    static readonly DELETE_CARTED_ITEM_SUCCESS =    '[Cart] DELETE_CARTED_ITEM_SUCCESS';
    static readonly DELETE_CARTED_ITEM_ERROR =      '[Cart] DELETE_CARTED_ITEM_ERROR';
}

// get all products that are in the cart
export class GetCartedItems implements Action {
    readonly type = CartedItemsActionTypes.GET_CARTED_ITEMS;
    constructor(public payload?: CartItem) {}
}
export class GetCartedItemsSuccess implements Action {
    readonly type = CartedItemsActionTypes.GET_CARTED_ITEMS_SUCCESS;
    constructor(public payload: CartItem[]) {}
}
export class GetCartedItemsError implements Action {
    readonly type = CartedItemsActionTypes.GET_CARTED_ITEMS_ERROR;
    constructor(public payload: Error | string) {}
}

// add product to the cart
export class AddItemToCart implements Action {
    readonly type = CartedItemsActionTypes.ADD_ITEM_TO_CART;
    constructor(public payload: CartItem) { }
}

export class AddItemToCartSuccess implements Action {
    readonly type = CartedItemsActionTypes.ADD_ITEM_TO_CART_SUCCESS;
    constructor(public payload: CartItem) { }
}

export class AddItemToCartError implements Action {
    readonly type = CartedItemsActionTypes.ADD_ITEM_TO_CART_ERROR;
    constructor(public payload: Error | string) { }
}

export class DeleteCartedItem implements Action {
    readonly type = CartedItemsActionTypes.DELETE_CARTED_ITEM;
    constructor(public payload: CartItem) {}
}

export class DeleteCartedItemSuccess implements Action {
    readonly type = CartedItemsActionTypes.DELETE_CARTED_ITEM_SUCCESS;
    constructor(public payload: CartItem) {}
}

export class DeleteCartedItemError implements Action {
    readonly type = CartedItemsActionTypes.DELETE_CARTED_ITEM_ERROR;
    constructor(public payload: Error | string) {}
}

export type CartActions
    = GetCartedItems
    | GetCartedItemsSuccess
    | GetCartedItemsError
    | AddItemToCart
    | AddItemToCartSuccess
    | AddItemToCartError
    | DeleteCartedItem
    | DeleteCartedItemSuccess
    | DeleteCartedItemError;
