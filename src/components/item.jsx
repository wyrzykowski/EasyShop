import React, { Component } from 'react';
import unknownPic from './unknow.png';


var itemStyle={
        backgroundColor: "#e8f0f2",
        width: "60%",
        marginLeft: "20%",
        marginTop: "4vh",
        height: "40vh"
};


var itemPictureStyle={
    width:'100%',
    margin: "2vh",
    float: "left"
};

var itemDescription={
width: "40%",//
padding: "2%",
//backgroundColor: "red",
float: "left"
};

var priceAndBuy={
width:"15%",//
float: "right",
padding: '2%'
};

var imageDiv={
maxWidth:"30%",
Maxheight:'10vh'
};
class Item extends Component {
    state = {  }

    render() { 
        return ( 
            <div>
                <div style={itemStyle} className="Item">
                   <div style={imageDiv}><img className="itemPicture" style={itemPictureStyle} src={this.props.itemPicturSrc || unknownPic}/></div> 
                    <div style={itemDescription}> 
                        <h2> <a href={this.props.link || "#"}>{this.props.title  || "Product"}</a> </h2>
                        <h4>{this.props.shortDescription}</h4>
                        <h4>{this.props.star}</h4>
                        <h6>{this.props.firstParametr}  </h6>
                        <h6>{this.props.secondParametr} </h6>
                        <h6>{this.props.thirdParametr} </h6>
                    </div>
                    <div style={priceAndBuy}>
                        <h2>{this.props.price + "$" || "Unknow"} </h2>
                        <button onClick={() => this.props.onBuy(this.props.id,this.props.price)} type="button" class="btn btn-warning">Buy now!</button>
                    </div>
                </div> 
            </div>
         );
    }
}
 
export default Item;