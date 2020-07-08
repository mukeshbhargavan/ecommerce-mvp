import React from "react";
import Header from "./header";

function Cart() {
    const cartList = JSON.parse(localStorage.getItem("myCart"));
    const [cart, setCart] = React.useState(cartList ? cartList : []);
    let totalAmount = 0;

    //Add/Remove quantity of the items in the cart
     const updateQty = (id, action) => {
        const objIndex = cart.findIndex((item => item.id === id));
        cart[objIndex].quantity =  (action === "add") ? cart[objIndex].quantity + 1 : cart[objIndex].quantity - 1;
        setCart([...cart]);
        localStorage.setItem("myCart", JSON.stringify(cart));
     }

     //Remove item from the cart
     const removeItem = (id) => {
        const afterRemovedArray = cart.filter(item => {
            return item.id !== id;
        });
        setCart([...afterRemovedArray]);
        localStorage.setItem("myCart", JSON.stringify(afterRemovedArray));
     }

    return (
       <div style={{"marginTop": "100px"}}>
          <Header cart={cart}/>
              <div className="floatLeft">
                  {cart.map((product) => {
                      const disableDecreaseItem = (product.quantity === 1) ? "disabled" : "";
                      totalAmount = totalAmount + (product.price * product.quantity);
                      localStorage.setItem("cartCount", totalAmount);
                      return(
                        <div className="cartMainContainer">
                          <div style={{"width":"100px"}} className="floatLeft">
                            <img src={product.img} height="150"/>
                          </div>
                          <div>
                            <b> {product.title} </b><br/><br/>
                            <span className="cartPrice">$ {(product.price * product.quantity).toFixed(2)}</span><br/><br/>
                            <div style={{"marginTop": "40px"}} className="floatLeft">
                                <button disabled={disableDecreaseItem} className="cartUpdateBtn" onClick={() => updateQty(product.id, "remove")}>-</button>
                                  <input name="qty" value={product.quantity} className="qtyInput" disabled/>
                                <button className="cartUpdateBtn" onClick={() => updateQty(product.id, "add")}>+</button>
                            </div>
                            <div style={{"margin": "45px 0px 0px 20px"}} className="floatLeft">
                              <a href="javascript:;" style={{"color": "red"}} onClick={() => removeItem(product.id)}>Remove</a>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  )}
              </div>

            {(cart.length === 0) ?
               <div style={{'padding': '20px', 'textAlign': 'center', 'fontSize': '25px'}}>
                  YOUR SHOPPING CART IS EMPTY! <br/> <a href="/" style={{'color': 'blue'}}>CLICK HERE TO PURCHASE</a>
               </div> :
               <div className="cartSummaryContainer">
                  <div className="priceDetailsTitle">PRICE DETAILS</div>
                  <div style={{"fontSize": "20px", "marginBottom": "80px"}}>
                      <div className="floatLeft width200px">Price ({cart.length} items)</div>
                      <div className="floatLeft">${localStorage.getItem("cartCount")}.00</div>
                  </div>
                  <div style={{"fontSize": "20px"}}>
                      <div className="floatLeft width200px">Delivery Fee</div>
                      <div className="floatLeft" style={{"color": "green"}}>FREE</div>
                  </div>
                  <div className="totalAmount">
                      <div className="floatLeft width200px"><br/>Total Amount</div>
                      <div className="floatLeft"><br/>${localStorage.getItem("cartCount")}.00</div>
                  </div>
                  <div style={{"textAlign": "center"}}>
                    <input type="submit" value="PLACE ORDER" className="PlaceOrderBtn"/>
                  </div>
            </div>}
       </div>
    )
}

export default Cart;
