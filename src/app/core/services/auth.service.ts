import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  public login(login): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
          this.isLoggedIn = this.checkLogin(login);
      })
    );
  }

  public logout(): void {
    this.isLoggedIn = false;
  }

  private checkLogin(login): boolean {
    return login === 'admin' ? true : false;
  }
}
