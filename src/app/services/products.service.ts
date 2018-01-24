import { Injectable } from '@angular/core';

import { Product } from '../products/product/product.model';
import { Category } from '../products/product/category.model';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
        new Product(1, 'Shirt', 'White colored', 4),
        new Product(2, 'Pants', 'Light lilac', 120),
        new Product(3, 'Cup', 'Wood', 5, Category.kitchen, false, ['Cupper', 'Glass']),
        new Product(4, 'Plate', 'Wood', 9, Category.kitchen)
        ];
  }
}
