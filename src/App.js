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
import Login from './login/login'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

// import { Component } from 'react'
export const LoginContext = React.createContext();

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  updateValue = (key, val) => {
    // console.log("username", key, val)
    this.setState({ [key]: val });
  }

  render() {
    return (
      <div className="App">
        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
        <LoginContext.Provider value={{ username: this.state, updateValue: this.updateValue }}>
          <Header></Header>
          <div>
            <Switch>
              <Route exact path='/' component={ProductList} />
              <Route exact path='/details/:id' component={ProductDetails} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/login' component={Login} />
              <Route path='**' component={PageNotFound} />
            </Switch>
          </div>
          <Footer ></Footer>
        </LoginContext.Provider>
      </div>
    );
  }
}
export default App;
