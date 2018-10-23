import React, { Component } from 'react';
import ItemCounter from './itemCounter';

class Basket extends Component {
    state = {  }
    render() { 
        return (
            <div className="Basket">
                <p>Baskset test</p>
                <ItemCounter/>
            </div>
          );
    }
}
 
export default Basket;