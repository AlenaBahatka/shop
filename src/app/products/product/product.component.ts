import { Component, OnInit, Input } from '@angular/core';

import { Category } from './category.model';
import { Product } from './product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(productId: number, productName: string, productPrice: number) {
    this.cartService.addToCart(productId, productName, productPrice);
  }
}
