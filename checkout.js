//global
products=JSON.parse(localStorage.getItem('cart'));

var cart_n = document.getElementById('cart_n');
var table = document.getElementById("table");
var total=0; 
var productscart=0;



//html
function tableHTML(i){
    
    return`
     <tr>
     <td><img style="width:90px;" src="${products[i].image}"></td>
     <td><h4>${products[i].title}</h4></td>
     <div class="cart-quantity cart-column">
     <td><h4>
     ${products[i].quantity}
     </h4>
     </td>
     </div>
     <td><h4>${products[i].price}</h4></td>
     </tr>
    `;
    
}


//render
function render(){
 for (let index = 0; index < products.length; index++) {
   if (products[index].quantity == 0){

   }
  else {
     table.innerHTML+=tableHTML(index);
     total=total+parseInt(products[index].price * products[index].quantity); 
    }
       
 }
 table.innerHTML+=`
  <tr>
  <th scope="col"></th>
  <th scope="col"></th>
  <th scope="col"></th>
  <th scope="col">Totalpris: ${total}.00 kr</th>
  </tr>

 `;

products=JSON.parse(localStorage.getItem("cart"));

}