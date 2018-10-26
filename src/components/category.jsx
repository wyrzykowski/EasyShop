import React, { Component } from 'react';

var categoryStyle={
zIndex:"0",
position:'fixed',
float: 'left',
paddingTop: '8%',
width:"15%",
height:"100%",
backgroundColor:"#e8f0f2",
paddingTop:'15vh',
paddingLeft:'1%'
};

var ulStyle={
    listStyleType:"none"

}
class Category extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={categoryStyle}>
                <h2>Laptops</h2>
                    <ul style={ulStyle}>
                        <li><a href="#">Dell</a></li>
                        <li><a href="#">Acer</a></li>
                        <li><a href="#">LG</a></li>
                        <li><a href="#">Samsung</a></li>
                    </ul>
                
            </div>
         );
    }
}
 
export default Category;