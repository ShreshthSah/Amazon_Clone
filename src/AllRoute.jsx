import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Compo/Home'
import Header from './Compo/Header'
import Manny from './Compo/Manny'
import Checkout from './Compo/Checkout'
import Nopage from './Compo/Nopage'
import Login from './Compo/Login'
import Payment from './Compo/Payment'

export default function AllRoute() {
  return (
    <div>
        <Routes>
            <Route path='/checkout' element={<Checkout/>}  >
            </Route>
            <Route path='/' element={<Manny/>}>
            </Route>
            <Route path='/payment' element={<Payment/>}>

            </Route>
          
          <Route path='*' element={<Nopage/>}>
          </Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>






        
      



    </div>
  )
}
