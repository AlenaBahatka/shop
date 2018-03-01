import { initialCartState, CartState } from './../state/cart.state';
import { CartedItemsActionTypes, CartActions } from '../actions/cart.actions';
import { CartItem } from '../../cart/models/cart-item.model';

export function cartReducer (
    state = initialCartState,
    action: CartActions
): CartState {
    console.log(`Reducer: Action came in! ${action.type}`);

    switch (action.type) {
        case CartedItemsActionTypes.GET_CARTED_ITEMS: {
        return {
                ...state,
                loading: true
            };
        }

        case CartedItemsActionTypes.GET_CARTED_ITEMS_SUCCESS: {
            const cartedItems = <CartItem[]>action.payload;
            console.log('Carted items in REDUCER ',  cartedItems);
            // transform array to object
            const items = cartedItems.reduce(
                (result: {[id: number]: CartItem}, cartItem: CartItem) => {
                    return {
                        ...result,
                        [cartItem.id]: cartItem
                    };
                },
                {
                    ...state.items
                }
            );

            return {
                ...state,
                loading: false,
                loaded: true,
                items
            };
        }

        case CartedItemsActionTypes.GET_CARTED_ITEMS_ERROR: {
            const error = action.payload;

            return {
                ...state,
                loading: false,
                loaded: false,
                error
            };
        }

        case CartedItemsActionTypes.DELETE_CARTED_ITEM: {
            return {
            ...state
            };
        }

        case CartedItemsActionTypes.DELETE_CARTED_ITEM_SUCCESS: {
            const cartItem = <CartItem>action.payload;
            const { [cartItem.id]: removed, ...items} = state.items;

            return {
            ...state,
            items
            };
        }

        case CartedItemsActionTypes.DELETE_CARTED_ITEM_ERROR: {
            const error = action.payload;
            return {
                ...state,
                error
            };
        }
        case CartedItemsActionTypes.ADD_ITEM_TO_CART: {
            return {
                ...state,
            };
        }

        case CartedItemsActionTypes.ADD_ITEM_TO_CART_SUCCESS: {
            const cartItem = <CartItem>action.payload;
            const items = {
            ...state.items,
            [cartItem.id]: cartItem
            };

            return {
                ...state,
                items
            };
        }

        case CartedItemsActionTypes.ADD_ITEM_TO_CART_ERROR: {
            const error = action.payload;
            return {
                ...state,
                error
            };
        }
        default: {
            console.log('UNKNOWN_CART action being handled!');
            return state;
        }
    }
}
