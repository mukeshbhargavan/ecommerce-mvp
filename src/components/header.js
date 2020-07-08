import React from 'react';

class Header extends React.Component {
  render(){
      return (
         <div>
           <header className="App-header">
             <div style={{'float': 'left', 'width': '300px'}}>
               <a href="/"><img src="/images/logo.png" className="logo" alt="Logo goes here"/></a>
             </div>
             <div style={{'float': 'right', 'textAlign': 'left', 'width': '80px'}}>
               <a href="cart">
                <img src="/images/cartIcon.png" className="logo" alt="Cart Icon"/>
               </a>
               <span className="circle">{this.props.cart.length}</span>
             </div>
           </header>
         </div>
      );
   }
}

export default Header;
