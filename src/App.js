import React, { Component } from 'react';

import  './App.css';
import Basket from'./components/basket';
import Profile from './components/profile';
import NavBar from './components/navbar';
import Item from './components/item';
import ItemCounter from './components/itemCounter';
import Products from './components/products';
import ShopShelf from './components/shopShelf';
import Category from './components/category';


class App extends Component {

  state = { 
    bought:[],
    total:0
  };


  handleBuy=(itemId,itemPrice)=>
  {

      const bought = [...this.state.bought];// klonuje tablice
      var total = this.state.total;

      this.newMethod(bought, itemId);
      total=parseFloat(total)+parseFloat(itemPrice);
      this.setState({bought});
      this.setState({total});
  
      //console.log(this.ShopShelf.getProducts);

  
      
      //console.log(this.state.bought);

  }
  newMethod(bought, itemId) {
    bought.push(itemId);
  }
 
  render() {
   
    return (
    
      <div className="App">
          <Profile userName="Admin"/>
         
        <header className="App-header">
          <NavBar bought={this.state.bought} total={this.state.total}/>
        </header>
        <Category/>
        
        <div className="Shop-content">
        <ShopShelf onBuy={this.handleBuy}/>
      
 
       
        </div>
        
        
     

      </div>
    );
  }
}

export default App;
