import React from 'react'
import "./home.css"
import Product from './Product'
export default function Home() {
  return (
    <div className='home'>
     <div className="home_container">
        <img
        className='home_image'
        
        src="https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg" alt="" />

        <div className="home_row">
        <Product id={Math.random()} rating={3} title="This is best gaming Laptop || Alienware laptop best processor with highest graphics card." cost="10"  src="https://m.media-amazon.com/images/I/41Diz41FkhL._AC_SY200_.jpg"/>
        <Product id={Math.random()} rating={4} title="This is dolby vision television with android feature and uhd oled every brand available in stock you can buy" cost="17" src="https://images-eu.ssl-images-amazon.com/images/I/41r5FlsCcyL._AC_SX184_.jpg"/>

       

        </div>
        <div className="home_row">
        <Product id={Math.random()} rating={5} title="HP laptop with i5 processor and GDDR5 graphics card which give user best gaming experience" cost="11" src="https://m.media-amazon.com/images/I/41Diz41FkhL._AC_SY200_.jpg"/>
        <Product id={Math.random()} rating={4} title="Boat airpods beat enviroment || must buy at sale offer" cost="89" src="https://m.media-amazon.com/images/I/31aNgbvYJKL._AC_SY200_.jpg"/>
        <Product id={Math.random()} rating={4} title="Best gaming tower pc with ddr4 graphics must buy amd processor || 512gb" cost="49" src="https://m.media-amazon.com/images/I/41DjFnGQ1FL._AC_SY200_.jpg"/>
        <Product id={Math.random()} rating={3} title="Corsair 389 hp machine must buy" cost="33" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCCC/cc_379x304-01._SY304_CB625511053_.jpgs"/>
          
        </div>
        <div className="home_row">
        <Product id={Math.random()} rating={5} title={"HP laser printer best printer with max 234 pages one time"} cost={15} src="https://m.media-amazon.com/images/I/21wNUazPKRL._AC_SY200_.jpg"/>
        <Product id={Math.random()} rating={4} title={"Vivo Z1 pro || 64 gb || 8 gb ram must buy 712 ai processor must buy s"} cost={20} src="https://m.media-amazon.com/images/I/41bFnhrsyOL._AC_SY200_.jpg"/>
        <Product id={Math.random()} rating={4} title={"Samsung 8gb versioni tab with prime OS || Kinzen tech "} cost={25} src="https://m.media-amazon.com/images/I/61NGnpjoRDL._SL1500_.jpg"/>
        <Product id={Math.random()} rating={4} title={"Boat airpods must buy with enviroment beats"} cost={39} src="https://m.media-amazon.com/images/I/31aNgbvYJKL._AC_SY200_.jpg"/>
        <Product id={Math.random()} rating={3} title={"MI smartphone with 56 gb ram must buy best gaming tab"} cost ={300} src="https://m.media-amazon.com/images/I/31aNgbvYJKL._AC_SY200_.jpg"/>

        </div>
     </div>
      
    </div> 
  )
}
