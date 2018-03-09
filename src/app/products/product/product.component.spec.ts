import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductComponent } from '..';
import { Product } from '../model/product.model';

describe('ProductComponent', () => {
  let component: ProductComponent,
    fixture: ComponentFixture<ProductComponent>,
    productDebugElement: DebugElement;
  const testProduct = new Product(1, 'productName', 'smth about product', 10);

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ ProductComponent ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    productDebugElement = fixture.debugElement.query(By.css('div'));

    component.product = testProduct;

    fixture.detectChanges();
  });

  it('should have two buttons', () => {
    const addToCartButton = productDebugElement.query(By.css('#addToCartButton')).nativeElement;
    const viewMoreButton = productDebugElement.query(By.css('#viewMoreButton')).nativeElement;

    expect(addToCartButton.textContent).toBeTruthy();
    expect(addToCartButton.textContent).toBe('ADD TO CART', 'name for button is uppercased');
    expect(viewMoreButton.textContent).toBeTruthy();
    expect(viewMoreButton.textContent).toBe('View more', 'view more button with title');
  });

  it('should display product info', () => {
    const listWithProductsInfo = productDebugElement.query(By.css('ul'));
    const priceInfo = listWithProductsInfo.children[0];

    expect(listWithProductsInfo.children.length).toBe(1, 'only price is available in infolist');
    expect(priceInfo.nativeElement.textContent).toBe(`Price: €${testProduct.price}.00`, 'info about price in euro for product');
    expect(productDebugElement.query(By.css('.title')).nativeElement.textContent).toBe(testProduct.name);
  });

  it('should raise addProduct event when clicked', () => {
    let productOnAdd: Product;
    component.addProductToCart.subscribe((product: Product) => productOnAdd = product);
    // Act
    productDebugElement.query(By.css('#addToCartButton')).triggerEventHandler('click', null);

    expect(productOnAdd).toBe(testProduct);
  });

  it('should raise viewmore event when clicked', () => {
    let productOnView: Product;
    component.edit.subscribe((product: Product) => productOnView = product);
    // Act
    productDebugElement.query(By.css('#viewMoreButton')).triggerEventHandler('click', null);

    expect(productOnView).toBe(testProduct);
  });
});
