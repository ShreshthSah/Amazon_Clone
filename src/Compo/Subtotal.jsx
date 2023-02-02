// import React from 'react'

// import {CurrencyFormat} from "react-currency-format"
// import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css"
import { useStateValue } from './StateProvider';
import {useNavigate} from "react-router-dom"
// var sum=0;

//  function summy(arr){
//   arr.reduce((a, b) => a + b, 0)
//  }


export default function Subtotal() {
  const Navigate=useNavigate()
  const [{basket}]=useStateValue({});

  // console.log(basket[0].price)
  var sum=0;
  for(var i=0;i<basket.length;i++){
    sum=sum+Number(basket[i].price)
  }
  // console.log(sum)
  return (
   <div className="subtotal">
    
    <div>`Total Price ${sum}`</div>
    
    
  
    <button onClick={e=>Navigate('/payment')}>Proceed to checkout</button>


   </div>
  )
}
