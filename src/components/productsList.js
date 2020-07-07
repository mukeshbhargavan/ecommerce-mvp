import React, {Component} from 'react';
import {products} from '../config/products';

export default class Product extends Component {
  render() {
    return (
        <div>
            {products.map((product, index) => {
              return (
                <div id={product.id} className= "productsList">
                  <b>{product.title}</b> - <span style={{'color': 'crimson'}}>${product.price.toFixed(2)}</span><br/><br/>
                  <img src={product.img} height="250"/><br/>
                  <input type="button" value="Add To Cart" className="btn"/>
                </div>
              )
            }
          )}
        </div>
      );
  }
}
