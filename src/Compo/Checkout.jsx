import React from 'react'
import Header from './Header'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

export default function Checkout({id,image,title,price,rating}) {
  const [{basket,user},dispatch]=useStateValue();
   

  return (
    <>
    <div className="checkout">
    
       <div className="checkout_left">
           <img
           className='checkout_ad'
            src="
             https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" alt=""/>

      <div>
        <h3>Hello,{user?.email}</h3>
         
         <h2 className="checkout_title">
            Your shopping Basket
         </h2>

         {basket.map(item=>(
          <CheckoutProduct
         key={Math.random()}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
         ))}

      </div>
       </div>


       <div className="checkout_right">
         
         <Subtotal/>

       </div>

       
       
    </div>
     {/* <div style={{marginLeft:"5%",textAlign:"center",width:"91%"}}>


     {basket.map((ele)=>
     <div key={id} style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",padding:"10px",display:"flex",justifyContent:"space-evenly"}}>
      <img  width="300px" src={image} alt="" />
      <p  style={{width:"500px",paddingTop:"30px",fontSize:"20px",fontFamily:"cursive"}}>{title}</p>
      <h3  style={{paddingTop:"30px",fontSize:"30px"}}>Rs {price}</h3>
      <button onClick={handleRemove} style={{marginTop:"30px",height:"30px",width:"200px",backgroundColor:"yellow"}}>REMOVE</button>
     </div>)}


   </div> */}
   </>
  )
}
