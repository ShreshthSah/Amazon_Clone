import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import { auth } from "../firebase";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const Navigate=useNavigate()
  const [{ basket, user }, dispatch] = useStateValue();
  const [sin,setsin]=useState('Sign in')
  const handleAuthentication =() => {
    if(user){
      signOut(auth)
    }
  };
 
  

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="logot"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
        
      </div>

      <div className="header_nav">
        <Link to={!user && '/login' }>
        <div onClick={handleAuthentication} className="header_option">
          <span className="headerOptionLineOne">
            Hello, {user?user.email:'guest'}
            
            {/* {} */}
          </span>
          <span className="headerOptionLineTwo">
           {user?'Sign out':'Sign in'}
            
          </span>
        </div>
        </Link>

        <div className="header_option">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="headerOptionBasket">
          <ShoppingCartIcon></ShoppingCartIcon>
          
          <span className="header_basketCount">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}
