import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product.model';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Array<Product>;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productList = this.productService.getProducts();
  }
}
