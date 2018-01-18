import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;

  constructor() { }

  ngOnInit() {
  }

  increment () {
    this.cartItem.quantity++;
  }

  decrement () {
    if (this.cartItem.quantity > 0) {
      this.cartItem.quantity--;
    }
  }
}
