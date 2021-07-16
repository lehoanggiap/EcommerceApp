import { CartService } from './../../shared/cart.service';
import { Product } from './../../shared/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.css']
})
export class CartScreenComponent implements OnInit {
  public products:any=[];
  public grandTotal:number=0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item)
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  

}
