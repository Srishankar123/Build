import React,{ Component } from 'react';

import "../styles/order.css";

class OrderPlaced extends Component {
  render() {
    const myStyle={
      height: "100vh",
      marginTop: "-70px" ,
      fontSize: "5px" ,
      backgroundSize: "cover" ,
      backgroundRepeat: "no-repeat",
    };
    return(
        <div style={myStyle}>
        <div class="container"></div>
        <div class="container1"></div>
        <div class="top">
        <font color= "black"><font size="10px">
        <font face="Cascade Mono">Your Order Is Completed ! <br></br></font></font></font>
        <div class="top1">
        <font color= "black"><font size="10px">
        <font face="Cascade Mono">Order More !!<br></br></font></font></font></div>
        </div>
        <div class="top2">
      <font color="635E5E"><font size="5px">
      <font face="Eras Demi ITC">You will be receiving a confirmation message with order details. </font> 
      </font></font></div>
        <img src='pizza image.gif' className='pic'></img>
        <img src='pizza.png' className='pic1'></img>
    

        </div>
        )
    }
};
export default OrderPlaced;