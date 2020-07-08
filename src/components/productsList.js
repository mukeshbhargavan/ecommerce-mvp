import React, { useState } from 'react';
import {products} from '../config/products';
import Header from './header';


function Product() {
    const [cart, setCart] = useState( localStorage.getItem("myCart") ? JSON.parse(localStorage.getItem("myCart")) : [] );
    // const [products, setProducts] = useState();
    // setProducts(products);
    //
    // const filterProduct = e => {
    //   products.sort(function(a, b) {
    //       return a.price < b.price;
    //   });
    //
    //   setProducts(products);
    // };

    const addToCart = (id) => {
        const productExist = cart.find(cart => {
          return cart.id === id
        });

        console.log(productExist, "================");

        if (productExist) {
            productExist.quantity += 1
              console.log(productExist, "+++++++++");
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

    console.log(cart);

    localStorage.setItem("myCart", JSON.stringify(cart));

    return (
        <div className="App">
            <Header cart={cart}/>
            <div className="searchContainer">
                <div style={{ 'width': '50%', 'float': 'left'}}>
                  <input type="text" className="searchInput"/>
                  <input type="button" value="Search" className="searchBtn"/>
                </div>
                <div style={{'width': '200px', 'float': 'left'}}>
                  <select name="filter" className="filterBox">
                    <option value="">Sort Product List</option>
                    <option value="lowtohigh">Price Low To High</option>
                    <option value="hightolow">Price Hight To Low</option>
                  </select>
                </div>
            </div>
            <h3 className="paddingLeft10">Products ({/*products.length*/})</h3>
            {products.map((product, index) => {
                return (
                  <div key={product.id} className= "productsList">
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
