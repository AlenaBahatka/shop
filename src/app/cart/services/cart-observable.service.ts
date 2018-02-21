import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError, switchMap } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { CartItem } from '../models/cart-item.model';
import { Cart } from '../models/cart.model';

@Injectable()
export class CartObservableService {
    private cartedProductsResourceURL = 'http://localhost:3000/cartedProducts';

    constructor(private http: HttpClient ) {}

    getCartedItems(): Observable<CartItem[]> {
        return this.http.get(this.cartedProductsResourceURL)
        .pipe(
            map(this.handleData),
            catchError(this.handleError)
        );
    }

    addToCart(cartItem: CartItem): Observable<CartItem> {
        console.log('ADD to Cart');
        const url = `${this.cartedProductsResourceURL}`,
            body = JSON.stringify(cartItem),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };
        return this.http
            .post(url, body, options)
            .pipe(
                map( this.handleData ),
                catchError( this.handleError )
            );
    }

    deleteFromCart(cartItem: CartItem): Observable<CartItem[]> {
        const url = `${this.cartedProductsResourceURL}/${cartItem.id}`;
        return this.http.delete(url)
            .pipe(
                switchMap(() => this.getCartedItems())
        );
    }

    private handleData(response: HttpResponse<CartItem[]>) {
        const body = response;
        return body || {};
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage: string;
        // A client-side or network error occurred.
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
        }
        console.error(err);

        console.error(errorMessage);
        return _throw(errorMessage);
    }
}
