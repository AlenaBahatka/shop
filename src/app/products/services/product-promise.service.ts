import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// rxjs
import { toPromise } from 'rxjs/operator/toPromise';

import { Product } from '../model/product.model';

@Injectable()
export class ProductPromiseService {
    private productsResourceURL = 'http://localhost:3000/products';

    constructor( private http: HttpClient ) {}

    getProducts(): Promise<Product[]> {
        return this.http.get(this.productsResourceURL)
            .toPromise()
            .then( response => <Product[]>response)
            .catch(this.handleError);
    }

    getProduct(id: number): Promise<Product> {
        return this.http.get(`${this.productsResourceURL}/${id}`)
        .toPromise()
        .then( response => <Product>response )
        .catch( this.handleError );
    }

    addProduct(product: Product) {
        const body = JSON.stringify(product),
        options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };

        return this.http.post(this.productsResourceURL, body, options)
            .toPromise()
            .then( response => <Product>response )
            .catch( this.handleError );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

