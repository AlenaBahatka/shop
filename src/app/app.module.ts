import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { FontDirective } from './directive/font.directive';


@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    DemoComponentComponent,
    FontDirective
  ],
  imports: [
    BrowserModule, ProductsModule, CartModule, FormsModule
  ],
  providers: [LocalStorageService, ConfigOptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
