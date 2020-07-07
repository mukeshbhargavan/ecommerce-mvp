import React from 'react';
import Header from './header';

function Cart() {

  var cart = localStorage.getItem("myCart");

    console.log(Array.from(cart), "===");

      return (
         <div>
            <Header cart={cart}/>
         </div>
      )
}

export default Cart;
// {cart.map((product, index) => {
//     return(
//       <div>
//         {product.id} {product.quantity}
//       </div>
//     )
//   }
// )};
