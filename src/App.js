import { Component } from "react";
import React from 'react';
import './App.css';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import { Route, Switch } from 'react-router-dom';
import ProductDetails from './components/products/productDetails/ProductDetails';
import ProductList from './components/products/productList/ProductList';
import PageNotFound from './components/shared/pageNotFound';
import Cart from './components/cart/cart'
import Login from './components/login/login'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';



export const LoginContext = React.createContext();

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem("username")
    };
  }

  updateValue = (key, val) => {
    // console.log("username", key, val)
    this.setState({ [key]: val });
  }

  render() {
    return (
      <div className="App mt-1">
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
          <Footer></Footer>
        </LoginContext.Provider>
      </div>
    );
  }
}
export default App;
