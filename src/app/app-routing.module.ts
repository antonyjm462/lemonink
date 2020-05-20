import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/componets/core/core.component';
import { AboutComponent } from './about/componets/about/about.component';
import { ProductComponent } from './product/componets/product/product.component';
import { DevComponent } from './about/componets/dev/dev.component';
import { MessageComponent } from './core/componets/message/message.component';



const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProductComponent},
  { path: 'pateron', component: DevComponent},
  { path: 'contact', component: MessageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
