import React from 'react';
import Header from './header';
import Footer from './footer';

function Cart() {
    const cartList = JSON.parse(localStorage.getItem("myCart"));
    const [cart, setCart] = React.useState(cartList ? cartList : []);

     const addQty = (id) => {
    //   const carts = cart.find(cart => {
    //     if (cart.id === id) {
    //        console.log(cart.quantity += 1);
    //        //return cart.quantity += 1
    //     }
    //   });
    //   //setCart(carts);
    //     console.log(cart);
     }

    return (
       <div style={{"marginTop": "100px"}}>
          <Header cart={cart}/>
              <div className="floatLeft">
                  {cart.map((product) => {
                      return(
                        <div className="cartMainContainer">
                          <div style={{"width":"100px"}} className="floatLeft">
                            <img src={product.img} height="150"/>
                          </div>
                          <div>
                            <b> {product.title} </b><br/><br/>
                            <span className="cartPrice">$ {(product.price * product.quantity).toFixed(2)}</span><br/><br/>
                            <div style={{"marginTop": "40px"}} className="floatLeft">
                                <button className="cartUpdateBtn">-</button>
                                  <input name="qty" value={product.quantity} className="qtyInput" disabled/>
                                <button className="cartUpdateBtn" onClick={() => addQty(product.id)}>+</button>
                            </div>
                            <div style={{"margin": "45px 0px 0px 20px"}} className="floatLeft">
                              <a href="" style={{"color": "red"}}>Remove</a>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  )}
              </div>

            {(cart.length === 0) ?
              <div>No item in cart!!!!! - <a href='/'>HAI</a></div> :
              <div className="cartSummaryContainer">
                HAI
              </div>}
          <Footer/>
       </div>
    )
}

export default Cart;
