import { CartItem } from '../../cart/models/cart-item.model';

export interface CartState {
    items: Readonly<{ [id: number]: CartItem }>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}

export const initialCartState: CartState = {
    items: {},
    loading: false,
    loaded: false,
    error: null
};
