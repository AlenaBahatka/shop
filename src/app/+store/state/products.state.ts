import { Product } from '../../products/model/product.model';
// ngrx
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface ProductsState extends EntityState<Product> {
    selectedProduct: Readonly<Product>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

// первоначальные продукты
export const initialProductsState: ProductsState = productAdapter.getInitialState({
    selectedProduct: null,
    loading: false,
    loaded: false,
    error: null
});
