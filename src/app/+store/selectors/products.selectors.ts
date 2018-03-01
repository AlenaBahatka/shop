import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState, productAdapter } from './../state/products.state';

export const getProductsState = createFeatureSelector<ProductsState>('products');

// export const getProductsData = createSelector(getProductsState,
//     (state: ProductsState) => state.data);

export const {
        selectAll: getProductsData } = productAdapter.getSelectors(getProductsState);

export const getProductsError = createSelector(getProductsState,
    (state: ProductsState) => state.error);
export const getSelectedProduct = createSelector(getProductsState,
    (state: ProductsState) => state.selectedProduct);

