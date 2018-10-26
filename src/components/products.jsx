import React, { Component } from 'react';
import Item from './item';
import dellPic from './1.jpg';
import dellPic2 from './2.jpg';
import dellPic3 from './3.jpg';
import dellPic4 from './4.jpg';
import dellPic5 from './5.jpg';
import dellPic6 from './6.jpg';
import dellPic7 from './7.jpeg';
import unknownPic from './unknow.png';

class Products extends Component {
    state = { 
       products:[
           {id:0,itemPicturSrc:dellPic, title:"Dell X4875G",shortDescription:"16 RAM/255 SSD/15'/intel i7",star:"5",firstParametr:"Ram: 16GB",secondParametr:"Dysk:255GB",thirdParametr:"Rodzina procesora: i7",price:"3999"},
           {id:1,itemPicturSrc:dellPic2, title:"Dell X4875G",shortDescription:"16 RAM/255 SSD/15'/intel i7",star:"5",firstParametr:"Ram: 16GB",secondParametr:"Dysk:255GB",thirdParametr:"Rodzina procesora: i7",price:"3279"},
           {id:2,itemPicturSrc:"", title:"Dell X4875G",shortDescription:"16 RAM/255 SSD/15'/intel i7",star:"5",firstParametr:"Ram: 16GB",secondParametr:"Dysk:255GB",thirdParametr:"Rodzina procesora: i7",price:"1999"},
           {id:3,itemPicturSrc:dellPic3, title:"Dell X4875G",shortDescription:"16 RAM/255 SSD/15'/intel i7",star:"5",firstParametr:"Ram: 16GB",secondParametr:"Dysk:255GB",thirdParametr:"Rodzina procesora: i7",price:"2879"},
           {id:4,itemPicturSrc:dellPic4, title:"Dell X4875G",shortDescription:"12 RAM/255 SSD/15'/intel i7",star:"5",firstParametr:"Ram: 12GB",secondParametr:"Dysk:255GB",thirdParametr:"Rodzina procesora: i5",price:"5879"},
           {id:5,itemPicturSrc:dellPic5, title:"Dell S875F",shortDescription:"4 RAM/255 SSD/15'/intel i7",star:"5",firstParametr:"Ram: 4GB",secondParametr:"Dysk:255GB",thirdParametr:"Rodzina procesora: i3",price:"1849"},
           {id:6,itemPicturSrc:dellPic6, title:"Dell V75L",shortDescription:"16 RAM/255 SSD/15'/intel i7",star:"5",firstParametr:"Ram: 16GB",secondParametr:"Dysk:255GB",thirdParametr:"Rodzina procesora: i7",price:"2174"},
   
       ]
       ,
       bought:[]
     };

     getProducts(){
         return "heheh";
         //this.state.products;
     }

    render() { 
        return ( 
            
            <div>
                 {this.state.products.map(product => 
                <Item
                    id={product.id}
                    itemPicturSrc={product.itemPicturSrc}
                    title={product.title}
                    shortDescription={product.shortDescription} 
                    star={product.star}
                    firstParametr={product.firstParametr}
                    secondParametr={product.secondParametr}
                    thirdParametr={product.thirdParametr}
                    price={product.price}
                    onBuy={this.props.onBuy}
                />

                
                 )}
               
            </div>
            


         );
    }
}
 
export default Products;