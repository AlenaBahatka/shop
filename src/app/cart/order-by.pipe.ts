import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from './models/cart-item.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<CartItem>, sortBy: string, descAsc: boolean): any {
    switch (sortBy) {
      case 'name':
        return  value.sort(this.compareValues('price', descAsc));

      case 'price':
        return value.sort(this.compareValues('price', descAsc));
      case 'amount':
      return value.sort(this.compareValues('quantity', descAsc));

      default:
        break;
    }
    return value;

  }

   compareValues(key, order) {
    return function(a, b) {
      const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      // console.log(varA, varB, comparison)
      // console.log('comparison ', (order === false) ? (comparison * -1) : comparison)
      return (
        (order) ? (comparison * -1) : comparison
      );
    };
  }
}
