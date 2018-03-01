import { ProductsState } from './products.state';
import { productsReducer, cartReducer } from './../reducers';
import { CartState } from './cart.state';

// ngrx
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    products: ProductsState;
    cart: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
    products: productsReducer,
    cart: cartReducer
};
