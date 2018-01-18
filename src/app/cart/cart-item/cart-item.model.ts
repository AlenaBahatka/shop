
export class CartItem {
    constructor(
        public id: number,
        public name: string,
        public price?: number,
        public quantity?: number,
    ) {
        this.id = id;
        this.name = name;
        this.price = price || 0;
        this.quantity = quantity || 1;
    }
}
