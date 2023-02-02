import React from 'react'
import "./product.css"
import GradeIcon from '@mui/icons-material/Grade';
import { useStateValue } from './StateProvider';
export default function Product({id,src,cost,title,rating}) {
  // const props={src}
  const [{basket},dispatch]=useStateValue();
  // console.log(`this is the ${basket}`)
  const addToBasket=()=>{
    //dispatch the item into the data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:src,
        price:cost,
        rating:rating,
      }

    })
  }
  return (
    <div
    className='product'
    // id={Math.random()}
    id={id}
    > 


      <div className="product_info">
        {/* <span>{id}</span>s */}
         <p>{title}</p>
         <p className="product_price"> 
         <small style={{marginRight:"7px"}}>Rs</small>
         <strong>{cost}</strong>
         </p>
         <div className="product_rating">

             {/* <GradeIcon></GradeIcon>
             <GradeIcon></GradeIcon>
             <GradeIcon></GradeIcon>
             <GradeIcon></GradeIcon>
             <GradeIcon></GradeIcon> */}
             {
              Array(rating).fill().map((_,i)=>(

                
                 <GradeIcon key={Math.random()}></GradeIcon>
              
              ))
             }
             


         </div>  
         
      </div>
         <img src={src} alt="" />
         <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}
