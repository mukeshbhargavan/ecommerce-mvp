import React from 'react';

class Header extends React.Component {
  render() {
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
                        <a href="/registration">Registration</a> | <a href="/login">Login</a>
                     </div>
                 </div>
             </header>
         </div>
      );
   }
}
export default Header;
