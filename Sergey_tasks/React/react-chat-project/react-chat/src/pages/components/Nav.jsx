import React from 'react';
import "../components/main.css";

import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../consts/consts';
import { signOut } from "firebase/auth";
import { auth } from '../../components/firebaseinit/firebaseinit';

function Nav({authUser}){

   const handlerClick = () => {
      signOut(auth);
  }
   return(
      <div className='nav'>
         <div className='nav__logo'>Chat App</div>
         <div className='nav__userinfo'>
            <img className='nav__img' src={authUser.photoURL}></img>
            <span>{authUser.displayName}</span>
            <Link to={LOGIN_ROUTE}> 
               <button className='nav__button' onClick={handlerClick}>logout</button>
            </Link>
         </div>
      </div>
   )
}
export default Nav;