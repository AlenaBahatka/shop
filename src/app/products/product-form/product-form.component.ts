import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

// rxjs
import { switchMap } from 'rxjs/operators';

import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { ProductArrayService } from '../services/product-array.service';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;

  constructor(
    private productArrayService: ProductArrayService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.product = new Product(null, '', '', null);

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productArrayService.getProduct(+params.get('id'))))
      .subscribe(
        product => this.product = {...product},
        err => console.log(err)
    );

  }

  saveProduct() {
    const product = {...this.product};
    console.log('SAVE PRODUCT');
    if (product.id) {
      this.productArrayService.updateProduct(product);
    } else {
      this.productArrayService.addProduct(product);
    }
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
