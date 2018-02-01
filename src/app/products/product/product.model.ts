import { Category } from './category.model';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public category?: Category,
        public isAvailable?: boolean,
        public equivalents?: string[],
        public lastUpdate?: Date
    ) { }
}
