import { ApiService } from './shared/api.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './material/material.module';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { CartScreenComponent } from './components/cart-screen/cart-screen.component';
import { AddNewProductScreenComponent } from './components/add-new-product-screen/add-new-product-screen.component';
import { ProductsDetailScreenComponent } from './components/products-detail-screen/products-detail-screen.component';
import { HomepageScreenComponent } from './components/homepage-screen/homepage-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageScreenComponent,
    ProductsDetailScreenComponent,
    AddNewProductScreenComponent,
    CartScreenComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


