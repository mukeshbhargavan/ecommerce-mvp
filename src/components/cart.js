import React from 'react';
import Header from './header';

function Cart() {
    var cart = JSON.parse(localStorage.getItem("myCart"));
    return (
       <div>
          <Header cart={cart}/>
          {cart.map((product, index) => {
              return(
                <div>
                  {product.id} - {product.quantity}
                </div>
              )
            }
          )};
       </div>
    )
}

export default Cart;
