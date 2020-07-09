import React from 'react';

class Header extends React.Component {

  render() {
      const isLoggedin = localStorage.getItem("isLoggedin");
      const userName = JSON.parse(localStorage.getItem("registration"));
      localStorage.setItem("myCart", JSON.stringify(this.props.cart));

      return (
         <div className="sticky">
             <header className="App-header">
                 <div style={{'width': '300px'}} className="floatLeft">
                    <a href="/"><img src="/images/logo.png" className="logo" alt="Logo goes here"/></a>
                 </div>
                 <div className="cartIconContainer">
                     <a href="cart">
                      <img src="/images/cartIcon.png" className="cartIcon" alt="Cart Icon"/>
                     </a>
                     <span className="circle">{this.props.cart.length}</span>
                     <div  className="loginLinkContainer">
                        {isLoggedin ?
                            <span> <b>Welcome {userName && userName.name}</b>, <a href="/logout">Logout</a></span> :
                        <span><a href="/registration">Registration</a> | <a href="/login">Login</a></span>
                        }
                     </div>
                 </div>
             </header>
         </div>
      );
   }
}
export default Header;
