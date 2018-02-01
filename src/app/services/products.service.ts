import { Injectable } from '@angular/core';

import { Product } from '../products/product/product.model';
import { Category } from '../products/product/category.model';

@Injectable()
export class ProductService {

  constructor() { }

  // lets to get products from the server take 2sec
  getProducts(): Promise<Product[]> {
  const products = [
        new Product(1, 'Shirt', 'White colored', 4),
        new Product(2, 'Pants', 'Light lilac', 120, Category.cloths),
        new Product(3, 'Cup', 'Wood', 5, Category.kitchen, false, ['Cupper', 'Glass'], new Date('2018-01-12')),
        new Product(4, 'Plate', 'Wood', 9, Category.kitchen)
        ];
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(products), 2000);
  });
  }
}
