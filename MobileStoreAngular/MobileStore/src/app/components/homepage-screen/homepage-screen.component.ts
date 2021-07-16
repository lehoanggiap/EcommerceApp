import { CartService } from './../../shared/cart.service';
import { Product } from './../../shared/product';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-homepage-screen',
  templateUrl: './homepage-screen.component.html',
  styleUrls: ['./homepage-screen.component.css']
})
export class HomepageScreenComponent implements OnInit {

  ProductData: any;
  dataSource!: MatTableDataSource<Product>;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'id_product',
    'productName',
    'unitPrice',
    'unitInStock',
    'moTa',
    'nhaSX',
    'danhMuc',
    'tinhTrang',
    'hinhAnh'
  ];
  public totalItem:number=0;

  constructor(private productApi: ApiService, private cartService:CartService) {
  
    }
    ngOnInit() {
      this.getlistproduct();
      //số lượng sp có trong giỏ
      this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem=res.length;
      })

    }
  
    getlistproduct(){
    this.productApi.GetProducts().subscribe((data) => {
      this.ProductData = data;

      //thêm cart

      this.ProductData.array.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});

        //end thêm
        
      });
    
    
    })
    }
    addtocart(item:any){
      this.cartService.addtoCart(item);
      alert("Sản phẩm " + item.productName+" đã được thêm vào giỏ hàng!");

    }

}
