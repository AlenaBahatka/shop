import { ProductArrayService } from '.';

describe('ProductArrayService', () => {
  let service: ProductArrayService;

  beforeEach(() => {
    service = new ProductArrayService();
  });

  it('should get peoduct by id', () => {
    service.getProduct(1).then(
      product => {
        expect(product.name).toBe('Shirt');
        expect(product.price).toBe(4);
      }
    );
  });

  it('get all 4 products', (done: DoneFn) => {
    service.getProducts().then(products => {
      expect(products.length).toBe(4);
      done();
    });
  });
});
