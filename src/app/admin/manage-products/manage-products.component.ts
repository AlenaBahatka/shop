import { Component, OnInit } from '@angular/core';
import { Product } from '../../products/model/product.model';
import { ProductArrayService } from '../../products';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  product: Product;

  constructor(private productArrayService: ProductArrayService) { }

  ngOnInit() {
    this.product = new Product(null, '', '', null);
  }

  saveProduct() {
    console.log('SAVED PRODUCT');
    const product = {...this.product};
    product.id = Math.floor(Math.random() * 100) + 1; // generate id for product
    this.productArrayService.addProduct(product);
    alert('Product added');
    this.product = new Product(null, '', '', null); // clean fields
  }
}
