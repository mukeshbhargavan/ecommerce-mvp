import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './components/productsList';
import Cart from './components/cart';
import Registration from './components/registration';
import Order from './components/order';
import Login from './components/login';
import Logout from './components/logout';
import './main.css';

ReactDOM.render((
  <Router>
  <Switch>
      <Route exact path='/' component={Product} />
        <Route path = "/products" component = {Product} />
        <Route path = "/cart" component = {Cart} />
        <Route path = "/registration" component = {Registration} />
        <Route path = "/order" component = {Order} />
        <Route path = "/login" component = {Login} />
        <Route path = "/logout" component = {Logout} />
    </Switch>
   </Router>
), document.getElementById('root'));
