import { Action } from '@ngrx/store';
import { Product } from '../../products/model/product.model';

// list of actions types
export class ProductsActionTypes {
    static readonly GET_PRODUCTS =                  '[Products] GET_PRODUCTS';
    static readonly GET_PRODUCTS_SUCCESS =          '[Products] GET_PRODUCTS_SUCCESS';
    static readonly GET_PRODUCTS_ERROR   =          '[Products] GET_PRODUCTS_ERROR';
    static readonly GET_PRODUCT =                   '[Products] GET_PRODUCT';
    static readonly GET_PRODUCT_SUCCESS  =          '[Products] GET_PRODUCT_SUCCESS';
    static readonly GET_PRODUCT_ERROR    =          '[Products] GET_PRODUCT_ERROR';
    static readonly CREATE_PRODUCT =                '[Products] CREATE_PRODUCT';
    static readonly CREATE_PRODUCT_SUCCESS =        '[Products] CREATE_PRODUCT_SUCCESS';
    static readonly CREATE_PRODUCT_ERROR   =        '[Products] CREATE_PRODUCT_ERROR';
}
// array of products
export class GetProducts implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCTS;
    constructor(public payload?: Product) { }
}
export class GetProductsSuccess implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) { }
}
export class GetProductsError implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCTS_ERROR;
    constructor(public payload: Error | string) { }
}
// one product
export class GetProduct implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCT;
    constructor(public payload: string | number) { }
}
export class GetProductSuccess implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCT_SUCCESS;
    constructor(public payload: Product) { }
}
export class GetProductError implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCT_ERROR;
    constructor(public payload: Error | string) { }
}

// create one product
export class CreateProduct implements Action {
    readonly type = ProductsActionTypes.CREATE_PRODUCT;
    constructor(public payload: Product) { }
}
export class CreateProductSuccess implements Action {
    readonly type = ProductsActionTypes.CREATE_PRODUCT_SUCCESS;
    constructor(public payload: Product) { }
}
export class CreateProductError implements Action {
    readonly type = ProductsActionTypes.CREATE_PRODUCT_ERROR;
    constructor(public payload: Error | string) { }
}

// объединяем классы теперь ProductsActions предоставляет все
export type ProductsActions
    = GetProducts
    | GetProductsSuccess
    | GetProductsError
    | GetProduct
    | GetProductSuccess
    | GetProductError
    | CreateProduct
    | CreateProductSuccess
    | CreateProductError;
