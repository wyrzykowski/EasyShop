import React, { Component } from 'react';
import ItemCounter from './itemCounter';

class Basket extends Component {
    state = {  }
    render() { 
        return (
            <div className="Basket">
                <ItemCounter bought={this.props.bought} total={this.props.total}/>
            </div>
          );
    }
}
 
export default Basket;