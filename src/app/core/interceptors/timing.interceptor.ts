import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // request interceptor
        // work only when trying to get products for cart from db
        if (req.url.includes('cartedProducts')) {
            const start = performance.now();
            console.log(start, req);
        return next.handle(req)
            .pipe(
                // response interceptor
                map((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                        const end = performance.now();
                        console.log(end, event);
                        console.log('Request took = ' + (end - start) + ' mls');
                        return event;
                    }
                })
            );
        } else {
            return next.handle(req);
        }
    }
}
