import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, CanLoad, Route } from '@angular/router';
// rxjs
import { Observable } from 'rxjs/Observable';
// ngrx
import { Store } from '@ngrx/store';

import { AuthService } from './../services/auth.service';
import { AppState } from '../../+store';
import * as RouterActions from './../../+store/actions/router.actions';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanActivateGuard is called!');
    const { url } = state;
    return this.checkLogin(url);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanLoad guard called !');
    const url = `/${route.path}`;
    console.log('url', url);
  return this.checkLogin(url);
  }


  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    // Navigate to the login page
    this.store.dispatch(new RouterActions.Go({
      path: ['/login']
    }));

    return false;
  }
}
