import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';
import { TimingInterceptor } from './core/interceptors/timing.interceptor';
import { AppRoutingModule, appRouterComponents } from './app.routing.module';
import { environment } from '../environments/environment';
import { RouterStateSerializerProvider, routerReducers, RouterEffects } from './+store';

@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    StoreModule.forRoot(routerReducers),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([RouterEffects]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CoreModule,
    ProductsModule, CartModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true,
    },
    RouterStateSerializerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
