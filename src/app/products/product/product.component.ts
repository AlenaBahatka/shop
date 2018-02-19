import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

import { Product } from '../model/product.model';
import { CartService } from '../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  @Output() addProductToCart = new EventEmitter<Product>();

  @Output() edit = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {}

  addToCart() {
    this.addProductToCart.emit(this.product);
  }

  viewMore() {
    this.edit.emit(this.product);
  }
}
