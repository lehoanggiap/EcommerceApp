import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // cartItemList: Array<Cart> = [];
  cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product:any)
  {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }




  getTotalPrice():number{
    let grandTatol=0;
    this.cartItemList.map((a:any)=>{
      grandTatol+=a.unitPrice;
    })
    return grandTatol;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id_product==a.id_product){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList)
  }
  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
