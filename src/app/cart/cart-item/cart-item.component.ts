import { Component, OnInit, Input, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() delete = new EventEmitter();

  @HostBinding('class')
  attrClass = 'cartItemClass';

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

  onDelete() {
    this.delete.emit(this.cartItem);
  }

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.attrClass = 'cartItemClassDecorated';
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.attrClass = 'cartItemClass';
  }
}
