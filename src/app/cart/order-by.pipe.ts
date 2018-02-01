import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from './cart-item/cart-item.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<CartItem>, sortBy: string): any {
    console.log(value)
    console.log(sortBy)
    switch (sortBy) {
      case 'name':
        return value.sort((a, b) => a.name.localeCompare(b.name));
      case 'price':
        return value.sort((a, b) => a.price - b.price);
      case 'amount':
        return value.sort((a, b) => a.quantity - b.quantity);

      default:
        break;
    }
    return value;

  }
}
