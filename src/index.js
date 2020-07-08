import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './main.css';
import Product from './components/productsList';
import Cart from './components/cart';

ReactDOM.render((
  <Router>
  <Switch>
      <Route exact path='/' component={Product} />
        <Route path = "/products" component = {Product} />
        <Route path = "/cart" component = {Cart} />
    </Switch>
   </Router>
), document.getElementById('root'));
