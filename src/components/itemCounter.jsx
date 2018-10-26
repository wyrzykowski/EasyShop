import React, { Component } from 'react';

class ItemCounter extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h4 >KUPIONE: {this.props.bought.length}</h4>
                <h5>Suma: {this.props.total+"$"}</h5>
            </div>
         );
    }
}
 
export default ItemCounter;