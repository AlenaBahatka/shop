import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

const products = [
  new Product(1, 'Shirt', 'White colored', 4),
  new Product(2, 'Pants', 'Light lilac', 120, Category.cloths),
  new Product(3, 'Cup', 'Wood', 5, Category.kitchen, false, ['Cupper', 'Glass'], new Date('2018-01-12')),
  new Product(4, 'Plate', 'Wood', 9, Category.kitchen)
  ];
const productsPromise = Promise.resolve(products);

@Injectable()
export class ProductArrayService {

  constructor() { }

  // lets to get products from the server take 2sec
  getProducts(): Promise<Product[]> {
    return productsPromise;
  }

  getProduct(id: number): Promise<Product> {
    return this.getProducts()
      .then(productsArray => {
        console.log('Product will be eddited: ', productsArray.find(product => product.id === +id));
        return productsArray.find(product => product.id === +id);
      })
      .catch(() => Promise.reject('Error in getProduct method in ProductArrayService'));
  }

  updateProduct(product: Product) {
    const i = products.findIndex(pr => pr.id === product.id);
    if (i > -1) {
      products.splice(i, 1, product);
    }
  }

  addProduct(product: Product) {
    products.push(product);
  }
}
