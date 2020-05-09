import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/componets/core/core.component';
import { BlogComponent } from './blog/componets/blog/blog.component';
import { AboutComponent } from './about/componets/about/about.component';
import { ProductComponent } from './product/componets/product/product.component';



const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
