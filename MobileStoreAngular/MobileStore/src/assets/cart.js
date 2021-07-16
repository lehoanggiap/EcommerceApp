var keyLocostorageCart = 'ListItemCart';
// tạo đối tượng item giỏ hàng với đầu vào là id của sản phẩm và số lượng của sản phẩm
function TaoDoiTuongItemCart(idProduct, soluong, ten , dongiacu,dongia,hinhanh){
var itemCart=new Object();
itemCart.idProduct=idProduct;
itemCart.soluong=soluong;
itemCart.ten=ten;
itemCart.dongia=dongia;
itemCart.dongiacu=dongiacu;
itemCart.hinhanh=hinhanh;
return itemCart;
}

// lấy ra danh sách toàn bộ item giỏ hàng

function LayListItemCart(){
    var ListItemCart =new Array();
    var jsonListItemCart =localStorage.getItem(keyLocostorageCart);

    if(jsonListItemCart!=null){
        ListItemCart =JSON.parse(jsonListItemCart);
    }
    return ListItemCart;
}


function SaveLocalStorageCart(ListItemCart)
{
    // chuyển lại thành json
    var jsonListItemCart=JSON.stringify(ListItemCart);
    //lưu ngược lại localstorage
    localStorage.setItem(keyLocostorageCart, jsonListItemCart)
}

function total(){
    var ListItemCart = LayListItemCart();
    var tong=0;
        for(var i=0;i<ListItemCart.length;i++)
        {
            tong+= eval(ListItemCart[i].dongia)*ListItemCart[i].soluong

        }
        return tong;
 }
 function laychitietgiohang(){
    var ListItemCart = LayListItemCart();
    var chitiet=" ";
        for(var i=0;i<ListItemCart.length;i++)
        {
            chitiet+='-'+ ListItemCart[i].ten+ " ,số lượng:"+ ListItemCart[i].soluong +"\n";
        }
        return chitiet;
 }

 function xoaItemcart(idProduct){
    var r = confirm("Bạn có chắc sẽ xóa sản phẩm này trong giỏ hàng!");
   if (r == true) {
     var ListItemCart = LayListItemCart();
       for(var i=0;i<ListItemCart.length;i++)
          {
              nowItemcart =ListItemCart[i];
            // idProduct là ID lấy từ localstorage
            //id là id sản phẩm thêm vào giỏ hàng
            if(nowItemcart.idProduct== idProduct)
            {
               // SaveLocalStorageCart(ListItemCart);
               // location.reload();
               ListItemCart.splice(i,1);
               SaveLocalStorageCart(ListItemCart);
               location.reload();
            }
         }
     //    alert('Xóa sản phẩm thành công');
       }
} 
function congsoluong(idProduct){
    var ListItemCart = LayListItemCart();
    for(var i=0;i<ListItemCart.length;i++)
       {
           nowItemcart =ListItemCart[i];
         // idProduct là ID lấy từ localstorage
         //id là id sản phẩm thêm vào giỏ hàng
         if(nowItemcart.idProduct== idProduct)
         {
            // SaveLocalStorageCart(ListItemCart);
            // location.reload();
            nowItemcart.soluong +=1
            SaveLocalStorageCart(ListItemCart);
            location.reload();
         }
      }
  //    alert('Xóa sản phẩm thành công');
    }

    function trusoluong(idProduct)
    {
        var ListItemCart = LayListItemCart();
        for(var i=0;i<ListItemCart.length;i++)
           {
               nowItemcart =ListItemCart[i];
             // idProduct là ID lấy từ localstorage
             //id là id sản phẩm thêm vào giỏ hàng
             if(nowItemcart.idProduct== idProduct && nowItemcart.soluong >1)
             {
                // SaveLocalStorageCart(ListItemCart);
                // location.reload();
                nowItemcart.soluong -=1
                SaveLocalStorageCart(ListItemCart);
                location.reload();
             }
          }

    }

    function thanhtoan(){
        //kiểm tra xem khách hàng đã nhập đủ thông tin chưa
        ten= document.getElementById("txtTen").value;
        sdt= document.getElementById("txtSDT").value;
        diachi= document.getElementById("txtDiachi").value;
        email= document.getElementById("txtEmail").value;
        // Lấy ngày hiện tại của hệ thống 
        var today=new Date();
        month=today.getMonth()+1;
        var date= today.getDate()+"/"+ month +"/"+ today.getFullYear();
        tongtien=total();
        chitiet=laychitietgiohang();
        // // //Duyệt lại các oder dươi localstorage
       
        var ListItemOrder= LayListItemOrder();
        number=ListItemOrder.length+1;
        if(ten==''||sdt==''||email==''||diachi=='')
        {
          //  alert('Quý khách vui lòng nhập đầy đủ thông tin đặt hàng');
           document.getElementById('id01').style.display='block'
    
        }
        else
        {
        var newItemOrder=TaoDoiTuongItemOrder(number,tongtien, date, ten, diachi,email,sdt,chitiet);
        ListItemOrder.push(newItemOrder);
        SaveLocalStorageOrder(ListItemOrder);
    
    
        localStorage.removeItem(keyLocostorageCart);
    
       alert('Đặt hàng thành công' )
        }
    
        //LẤY DANH SÁCH SẢN PHẨM ĐANG CÓ TRONG GIỎ HÀNG Ở LOCALSTORAGE
      
    //   //thêm mới sẩn phẩm nếu chưa tồn tại trong giỏ hàng
     //function TaoDoiTuongItemOrder(idOrder, tongtien, ngay , ten, diachi, email, phone, chitiet ){
    
    
      
    
      }


