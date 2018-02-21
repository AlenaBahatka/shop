import { CartItem } from './cart-item.model';

export class Cart {
    constructor(
        public cartedProducts: CartItem[],
        public numberOfCartedItems: number,
        public summ: number,
    ) { }
}
