import React, { useState } from 'react';
import {products} from '../config/products';
import Header from './header';


function Product() {
    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
        const productExist = cart.find(cart => {
          return cart.id === id
        });

        if (productExist) {
            productExist.quantity += 1
        } else {
          setCart([
            ...cart,
            {
              id: id,
              quantity: 1
            }
          ]);
        }
    };

    localStorage.setItem("myCart", cart);

    return (
        <div className="App">
            <Header cart={cart}/>
            <div className="searchContainer">
                <div style={{ 'width': '50%', 'float': 'left'}}>
                  <input type="text" className="searchInput"/>
                  <input type="button" value="Search" className="searchBtn"/>
                </div>
                <div style={{'width': '200px', 'float': 'left'}}>
                  <select name="filter" style={{'height': '40px', 'width': '200px', 'clear': 'both', 'margin': '20px 0px 0px 0px'}}>
                    <option value="">Sort Product List</option>
                    <option value="">Price Low To High</option>
                    <option value="">Price Hight To Low</option>
                  </select>
                </div>
            </div>
            <h3 className="paddingLeft10">Products ({products.length})</h3>
            {products.map((product, index) => {
                return (
                  <div id={product.id} className= "productsList">
                    <b>{product.title}</b> - <span style={{'color': 'crimson'}}>${product.price.toFixed(2)}</span><br/><br/>
                    <img src={product.img} height="250"/><br/>
                    <input type="button" value="Add To Cart" className="btn" onClick={() => addToCart(product.id)}/>
                  </div>
                )
              }
            )}
        </div>
    );
}
export default Product;
