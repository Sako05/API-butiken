products=JSON.parse(localStorage.getItem('cart'));
var table = document.getElementById("table");
var total=0; 


/**
 * Render all products in an HTML table
 * Adds two quantity buttons for each product
 * Adds a delete buttonf for each product
 */
function tableHTML(i){
    return`
     <tr>
     <td><img style="width:90px;" src="${products[i].image}"></td>
     <td><h4>${products[i].title}</h4></td>
     <div class="cart-quantity cart-column">
     <td><h4>
     <button type="button" class="btn btn-primary" onclick="cartminus('${products[i].title}','${products[i].price}','${products[i].image}','${products[i].quantity}')">-</button>
     ${products[i].quantity}
     <button type="button" class="btn btn-primary" onclick="cartplus('${products[i].title}','${products[i].price}','${products[i].image}','${products[i].quantity}')">+</button>
     </h4>
     </td>
     </div>
     <td><h4>${products[i].price}</h4></td>
     <td><button type="button" onclick="cart1('${products[i].title}','${products[i].price}','${products[i].image}','${products[i].quantity}'), window.location.reload()" class="btn btn-dark btn-circle btn-md">X</button></td>
     </tr>
    `;
}

/**
 * Retrieves the products from localStorage
 * Updates quantity in localStorage
 * Adds to quantity
 */
function cart1(title, price, image, quantity){
  var items = JSON.parse(localStorage.getItem('cart')) || [];
  var item = items.find(item => item.title === title);
  
  if (item) {
    item.quantity = 0;
}

localStorage.setItem('cart', JSON.stringify(items));
console.log(items);
}


/**
 * Retrieves the products from localStorage
 * Updates quantity in localStorage
 * Adds to quantity
 * Reloads page
 */
  function cartplus(title, price, image, quantity){
    var items = JSON.parse(localStorage.getItem('cart')) || []; 
    var item = items.find(item => item.title === title);
    quantity++;
      
    if (item) {
        item.quantity = quantity;
    } 
  
    window.location.reload();
    localStorage.setItem('cart', JSON.stringify(items));
    console.log(items);
  }


/**
 * Retrieves the products from localStorage
 * Updates quantity in localStorage
 * Subtracts quantity
 */
  function cartminus(title, price, image, quantity){
    var items = JSON.parse(localStorage.getItem('cart')) || [];   
    var item = items.find(item => item.title === title);
    quantity--;

    if(quantity == 0){
      alert('Ta bort produkten med kryss-knappen')
    }else{ 

    if (item) {
      window.location.reload();
        item.quantity = quantity;
    } 
  } 
    localStorage.setItem('cart', JSON.stringify(items));
    console.log(items);
  }


/**
 * Clears localStorage
 * Realoads the page
 */
  function clean(){
    localStorage.clear();
    window.location.reload();
  }


/**
 * Renders buttons for the cart in a HTML table
 * Givs each product a index.
 * Retrieves products from localStorage
 */
function render(){
 for (let index = 0; index < products.length; index++) {
   if (products[index].quantity == 0){
     //Do nothing
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
  <th scope="col"></th>
  
  <th scope="col">Totalpris: ${total}.00 kr</th>
  </tr>
  <tr>
  <th scope="col"></th>
  <th scope="col"></th>
  
  <th scope="col">
  <button id="btnClean" onclick="clean()" class="btn text-white btn-warning">Töm kundvagnen</button>
  </th>
  <th scope="col"><button id="button" onclick="location.href='./order.html'" class="btn btn-success">Gå vidare till kassan</button></th>
  <th scope="col"></th>
  </tr>
 `;

products=JSON.parse(localStorage.getItem("cart"));
}