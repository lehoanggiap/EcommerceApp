import { Product } from './product';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'POST'

  })
};
@Injectable({
  providedIn: 'root'
})



export class ApiService {

  endpoint: string = 'http://localhost:8080/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
 

  constructor(private http: HttpClient) { }

  // AddProduct(data: Product): Observable<any> {
  //   let API_URL = `${this.endpoint}/product/list`;
  //   return this.http.post(API_URL, data)
  //     .pipe(
  //       catchError(this.errorMgmt)
  //     )
  // }

  GetProducts() {
    return this.http.get("http://localhost:8080/api/product/list");
  }

  // Get product
  GetProduct(id: any) {
    return this.http.get("http://localhost:8080/api/product/get/"+id);
  }

  SignIn(data: any) {
    let API_URL = `${this.endpoint}/admin/signin`;
    return this.http.post("http://localhost:8080/api/admin/signin", data)

     
      // .pipe(
      //   catchError(this.errorMgmt)
      // )
  }



  // Update product
  // UpdateProduct(id: any, data: any): Observable<any> {
  //   let API_URL = `${this.endpoint}/product/${id}`;
  //   return this.http.put(API_URL, data, { headers: this.headers })
  //     .pipe(
  //       catchError(this.errorMgmt)
  //     )
  // }

  // // Delete product
  // DeleteProduct(id: any): Observable<any> {
  //   var API_URL = `${this.endpoint}/product/${id}`;
  //   return this.http.delete(API_URL)
  //     .pipe(
  //       catchError(this.errorMgmt)
  //     )
  // }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

