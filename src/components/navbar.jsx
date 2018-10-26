import React, { Component } from 'react';
import Basket from './basket';
var navStyle={
    position: 'fixed',
    width: '100%',
    zIndex:"1",
};
class NavBar extends Component {
    //state = {  }
    render() { 
        return (
            <div className="NavBar" style={navStyle}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-info">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a className="navbar-brand" href="#">EasyShop</a>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            </ul>
                            <Basket bought={this.props.bought} total={this.props.total}/>
                        </div>
                    </nav>
                                    
            </div>
          );
    }
}
 
export default NavBar;