import React, { Component } from 'react';

import  './App.css';
import Basket from'./components/basket';
import Profile from './components/profile';
import NavBar from './components/navbar';
import Item from './components/item';
import ItemCounter from './components/itemCounter';
import Products from './components/products';
import ShopShelf from './components/shopShelf';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <div className="Shop-content">
          <Profile userName="Admin"/>
          <ShopShelf/>
        </div>
        
        
     

      </div>
    );
  }
}

export default App;
