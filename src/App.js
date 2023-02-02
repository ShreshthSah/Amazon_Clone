
import { useEffect } from 'react';
import AllRoute from './AllRoute';
import './App.css';
import Header from './Compo/Header';
import Home from './Compo/Home';
import { useStateValue } from './Compo/StateProvider';
import { auth } from './firebase';

function App() {
  const [{},dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log(' THE USER IS >>> ', authUser);
      if(authUser){
     //the user just logged in / the user was lgged in 
       dispatch({
        type:'SET_USER',
        user:authUser
       })
      }
      else{
       // the user is logged out
       dispatch({
        type:'SET_USER',
        user:null
       })
      }
    })
  },[])
  
  return (

    <div className="app">
     
      <Header/>
      <AllRoute/>
    </div>
 
  );
}

export default App;
