import React, { Component } from 'react';
import Products from './products';

var shelfStyle={
    paddingTop:'10vh',
}
class ShopShelf extends Component {
    state = {  }

 
    render() { 
        return ( 
            <div style={shelfStyle}>
                <Products onBuy={this.props.onBuy} />
            </div>
         );
    }
}
 
export default ShopShelf;