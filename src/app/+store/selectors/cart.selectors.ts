import { createFeatureSelector, createSelector } from '@ngrx/store';


import { getRouterState } from './../../+store/selectors/router.selectors';
import { CartState } from './../state/cart.state';

const getItems = (state: CartState) => state.items;
const getLoaded = (state: CartState) => state.loaded;
const getLoading = (state: CartState) => state.loading;
const getError = (state: CartState) => state.error;

export const getCartState = createFeatureSelector<CartState>('cart');

const getCartItems = createSelector(getCartState, getItems);
export const getCartLoaded = createSelector(getCartState, getLoaded);
export const getCartLoading = createSelector(getCartState, getLoading);
export const getCartError = createSelector(getCartState, getError);

// transform object to Array
export const getCartedItems = createSelector(getCartItems, items => {
    return Object.keys(items).map(id => items[+id]);
});

