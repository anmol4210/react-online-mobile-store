import { Component } from "react";
import React from 'react';
import './App.css';
import Header from './shared/header';
import Footer from './shared/footer';
import { Route, Switch } from 'react-router-dom';
import ProductDetails from './products/productDetails/ProductDetails';
import ProductList from './products/productList/ProductList';
import PageNotFound from './shared/pageNotFound';
import Cart from './cart/cart'
// import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div>
          <Switch>
            <Route exact path='/' component={ProductList} />
            <Route exact path='/details/:id' component={ProductDetails} />
            <Route exact path='/cart' component={Cart} />
            <Route path='**' component={PageNotFound} />
          </Switch>
        </div>
        <Footer ></Footer>
      </div>
    );
  }
}
export default App;
