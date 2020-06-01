import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import emailjs from 'emailjs-com';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/componets/core/core.component';
import { ProductComponent } from './product/componets/product/product.component';
import { AboutComponent } from './about/componets/about/about.component';
import { ItemComponent } from './product/componets/item/item.component';
import { FooterComponent } from './core/componets/footer/footer.component';
import { MessageComponent } from './core/componets/message/message.component';
import { NavbarComponent } from './core/componets/navbar/navbar.component';
import { DevComponent } from './about/componets/dev/dev.component';


const COMPONENTS = [
    AppComponent,
    CoreComponent,
    ProductComponent,
    AboutComponent,
    DevComponent,
    FooterComponent,
    MessageComponent,
    NavbarComponent,
    ItemComponent,
];

const PIPES = [];

const SERVICES = [];

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
];

@NgModule({
  declarations: [...COMPONENTS,...PIPES,...SERVICES],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
