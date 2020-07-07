import React from 'react';

class Header extends React.Component {
  render(){
      return (
         <div>
           <header className="App-header">
             <div style={{'float': 'left', 'width': '300px'}}>
               <img src="/images/logo.png" className="logo"/>
             </div>
             <div style={{'float': 'right', 'text-align': 'left', 'width': '80px'}}>
               <a href='cart'><img src="/images/cartIcon.png" className="logo"/></a>
               <span className="circle">{this.props.cart.length}</span>
             </div>
           </header>
         </div>
      );
   }
}

export default Header;
