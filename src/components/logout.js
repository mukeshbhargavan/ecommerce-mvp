import React from 'react';
import Header from './header';
import Footer from './footer';

function Logout() {
    localStorage.removeItem("myCart");
    localStorage.removeItem("registration");
    localStorage.removeItem("cartCount");
    localStorage.removeItem("isLoggedin");

    return (
       <div style={{'marginTop': '100px'}}>
          <Header cart=""/>
          <div style={{'textAlign': 'center', 'height': '500px', 'marginTop': '250px'}}>
              <h3>You have been successfully logout!</h3><br/>
              <b style={{'color': 'blue'}}>Thanks for visiting eCommerce MVP</b>
          </div>
          <Footer/>
       </div>
    )
}

export default Logout;
