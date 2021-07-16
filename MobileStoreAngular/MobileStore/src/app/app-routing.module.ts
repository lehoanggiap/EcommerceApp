import { HomepageScreenComponent } from './components/homepage-screen/homepage-screen.component';
import { ProductsDetailScreenComponent } from './components/products-detail-screen/products-detail-screen.component';
import { CartScreenComponent } from './components/cart-screen/cart-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { AddNewProductScreenComponent } from './components/add-new-product-screen/add-new-product-screen.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'homepage-screen' },
  {path:'homepage-screen',component:HomepageScreenComponent},
  {path:'product-detail-screen/:id',component:ProductsDetailScreenComponent},
  {path:'cart-screen',component:CartScreenComponent},
  {path:'login-screen',component:LoginScreenComponent},
  {path:'add-new-product-screen',component:AddNewProductScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
