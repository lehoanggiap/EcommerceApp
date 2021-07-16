import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';
@Component({
  selector: 'app-products-detail-screen',
  templateUrl: './products-detail-screen.component.html',
  styleUrls: ['./products-detail-screen.component.css']
})
export class ProductsDetailScreenComponent implements OnInit {

  constructor(private productApi: ApiService,private activatedRoute: ActivatedRoute, private cartService:CartService) { }
  item: any;
  id:any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id=params.get("id");

    });
    this.getProductbyId(this.id);
  }
  getProductbyId(Id:any){
    this.productApi.GetProduct(Id).subscribe((res)=>{
      this.item=res;
      console.log(res);
      
    })
  }
  addtocart(item:any){
    this.cartService.addtoCart(item);
    alert("Sản phẩm " + item.productName+" đã được thêm vào giỏ hàng!");


  }

}
