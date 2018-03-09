
import { OrderByPipe } from './order-by.pipe';
import { CartItem } from './models/cart-item.model';

describe('OrderByPipe', () => {
  const
    cartedProducts = [],
    itemA = new CartItem(1, 'a', 1, 0),
    itemB = new CartItem(2, 'b', 2, 4),
    itemC = new CartItem(3, 'c', 3, 6),
    pipe = new OrderByPipe();

    afterEach(() => {
      cartedProducts.length = 0;
    });

  it('should order by name asc', () => {
    cartedProducts.push(itemC);
    cartedProducts.push(itemB);
    cartedProducts.push(itemA);

    const transformedItems = pipe.transform(cartedProducts, 'name', false);
    expect(transformedItems[0].name).toBe('a');
    expect(transformedItems[2].name).toBe('c');
  });

  it('should order by price des', () => {
    cartedProducts.push(itemC);
    cartedProducts.push(itemA);

    const transformedItems = pipe.transform(cartedProducts, 'price', false);
    expect(transformedItems[0].name).toBe('a');
    expect(transformedItems[1].name).toBe('c');
  });

  it('should order by amount des', () => {
    cartedProducts.push(itemA);
    cartedProducts.push(itemC);

    const transformedItems = pipe.transform(cartedProducts, 'amount', false);
    expect(transformedItems[0].name).toBe('a');
    expect(transformedItems[1].name).toBe('c');
  });

  it('should not order by unknown', () => {
    cartedProducts.push(itemC);
    cartedProducts.push(itemA);

    const transformedItems = pipe.transform(cartedProducts, 'unknown', false);
    expect(transformedItems[0].name).toBe('c');
    expect(transformedItems[1].name).toBe('a');
  });
});
