import React, { useContext, useEffect } from 'react';
import "../components/main.css";

import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../consts/consts';
import { signOut } from "firebase/auth";
import { auth } from '../../components/firebaseinit/firebaseinit';
import useUser from './useUser';
import Context from '../Context';

function Nav(){
   const user = useUser();
   const valueData = useContext(Context);

   // useEffect(() => {
      valueData.setAuthUser(user);
      // console.log(valueData.authUser);
   // }, []);

   const handlerClick = () => {
      signOut(auth);
  }
   return(
      <div className='nav'>
         <div className='nav__logo'>Chat App</div>
         <div className='nav__userinfo'>
            <img className='nav__img' src={user.photoURL}></img>
            <span>{user.displayName}</span>
            <Link to={LOGIN_ROUTE}> 
               <button className='nav__button' onClick={handlerClick}>logout</button>
            </Link>
         </div>
      </div>
   )
}
export default Nav;