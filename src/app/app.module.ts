import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/componets/core/core.component';
import { BlogComponent } from './blog/componets/blog/blog.component';
import { ProductComponent } from './product/componets/product/product.component';
import { AboutComponent } from './about/componets/about/about.component';
import { PocketDBService } from './PocketDB/services/pocket-db.service';
import { ItemComponent } from './product/componets/item/item.component';
import { NavsideComponent } from './blog/componets/navside/navside.component';
import { DocumentComponent } from './blog/componets/document/document.component';
import { FooterComponent } from './core/componets/footer/footer.component';
import { MessageComponent } from './core/componets/message/message.component';
import { NavbarComponent } from './core/componets/navbar/navbar.component';
import { DevComponent } from './about/componets/dev/dev.component';


const COMPONENTS = [
    AppComponent,
    CoreComponent,
    BlogComponent,
    ProductComponent,
    AboutComponent,
    DevComponent,
    NavsideComponent,
    DocumentComponent,
    FooterComponent,
    MessageComponent,
    NavbarComponent,
    ItemComponent,
];

const PIPES = [];

const SERVICES = [
  PocketDBService
];

const MODULES = [
  BrowserModule,
  AppRoutingModule,
];

@NgModule({
  declarations: [...COMPONENTS,...PIPES,...SERVICES],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
