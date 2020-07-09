import React from 'react';
import Header from './header';
import Footer from './footer';

function Order() {
    let cart = JSON.parse(localStorage.getItem("myCart")) || [];
    return (
       <div style={{'marginTop': '100px'}}>
          <Header cart={{cart}}/>
          <div style={{'textAlign': 'center', 'height': '500px'}}>

              Cash on delivery

          </div>
          <Footer/>
       </div>
    )
}

export default Order;
