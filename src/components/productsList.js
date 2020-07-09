import React, { useState } from 'react';
import {products} from '../config/products';
import Header from './header';
import Footer from './footer';

function Product() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("myCart")) || []);
    const [productsList, setProductsList] = useState(products);

    //Sort products by price (Low to High and High to Low)
    const filterProduct = e => {
        productsList.sort((a, b) => {
            return (e.target.value === 'lowtohigh') ?  (a.price - b.price) : (b.price - a.price);
        });
        setProductsList([...productsList]); //Storing the sorted products list in state
    }

    //Search products - It will search by product title
    const searchProduct = () => {
        const searchTxt = document.getElementById('searchTxt').value;
        if (!searchTxt) window.location.href = '/'; //To clear search

        //Search product from the product list by product title
        const searchResult = products.filter(item => {
            return item.title.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1;
        });
        setProductsList([...searchResult]);
    }

    //Add to cart - If already added just increase the quantity otherwise add to the cart
    const addToCart = (id, title, img, price) => {
        const productExist = cart.find(cart => {
          return cart.id === id
        });

        if (productExist) {
            productExist.quantity += 1
        } else {
          setCart([
            ... cart,
            {
              id: id,
              title: title,
              img: img,
              price: price,
              quantity: 1
            }
          ]);
        }
    };

    return (
        <div className="App">
            <Header cart={cart}/>
            <div className="searchContainer">
                <div style={{ 'width': '50%'}} className="floatLeft">
                    <input type="text" className="searchInput" id="searchTxt"/>
                    <input type="button" value="Search" className="searchBtn" onClick={searchProduct}/>
                </div>
                <div style={{'width': '200px'}} className="floatLeft">
                    <select name="filter" className="filterBox" onChange={filterProduct}>
                        <option value="">-- Sort by price --</option>
                        <option value="lowtohigh">Price Low To High</option>
                        <option value="hightolow">Price Hight To Low</option>
                    </select>
                </div>
            </div>
            <h3 className="paddingLeft10"> Products ({productsList.length}) </h3>
            <div style={{'height': '350px'}}>
            {productsList.map((product, index) => {
                return (
                    <div key={product.id} className= "productsList">
                      <b>{product.title}</b> - <span style={{'color': 'crimson'}}>${product.price.toFixed(2)}</span><br/><br/>
                      <img src={product.img} height="250"/><br/>
                      <input
                        type="button"
                        value="Add To Cart"
                        className="btn"
                        onClick={() => addToCart(product.id, product.title, product.img, product.price)}
                        />
                    </div>
                 )
               }
            )}
            </div>
            <Footer/>
        </div>
    );
}
export default Product;
