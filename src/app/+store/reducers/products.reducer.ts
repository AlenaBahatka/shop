import { productAdapter, initialProductsState, ProductsState } from './../state/products.state';
import { ProductsActions, ProductsActionTypes } from '../actions/products.actions';
import { Product } from '../../products/model/product.model';

export function productsReducer(
    state = initialProductsState,
    action: ProductsActions
): ProductsState {
    console.log(`Reducer! Action = ${action.type} state =`, state);

    switch (action.type) {
        case ProductsActionTypes.GET_PRODUCT:
        case ProductsActionTypes.GET_PRODUCTS: {
            console.log('GET_PRODUCTS action being handled!');
            return {
                ...state,
                loading: true
            };
        }

        case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
            console.log('GET_PRODUCTS_SUCCESS action being handled!');
            console.log('action payload ', action.payload);
            // CHANGE
            const products = [...<Array<Product>>action.payload];
            return productAdapter.addAll(products, {
                ...state,
                loading: false,
                loaded: true
            });
        }

        case ProductsActionTypes.GET_PRODUCT_ERROR:
        case ProductsActionTypes.GET_PRODUCTS_ERROR: {
            console.log('GET_PRODUCTS_ERROR action being handled!');
            const error = action.payload;
            return {
                ...state,
                loading: false,
                loaded: false,
                error
            };
        }

        case ProductsActionTypes.GET_PRODUCT_SUCCESS: {
            console.log('GET_PRODUCT_SUCCESS action being handled!');
            const selectedProduct = { ...<Product>action.payload };
            return {
                ...state,
                loading: false,
                loaded: true,
                selectedProduct
            };
        }

        case ProductsActionTypes.CREATE_PRODUCT: {
            console.log('CREATE_PRODUCT action being handled!');
            return {...state};
        }
        case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
            console.log('CREATE_PRODUCT_SUCCESS action being handled!');
            const product = { ...<Product>action.payload };
            return productAdapter.addOne(product, {
                ...state
            });
        }

        case ProductsActionTypes.CREATE_PRODUCT_ERROR: {
            console.log('CREATE_PRODUCT_ERROR action being handled!');
            const error = action.payload;
            return {
                ...state,
                error
            };
        }

        default: {
            console.log('UNKNOWN action being handled!');
            return state;
        }
    }
}
