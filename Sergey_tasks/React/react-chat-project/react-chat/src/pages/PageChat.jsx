import React from 'react';
import "../components/main.css";

import img2  from "../img/img2.png";
import img3  from "../img/img8.png";
import img4  from "../img/img4.png";
import img5  from "../img/img5.png";
import img6  from "../img/img6.png";

import { auth } from '../components/firebaseinit/firebaseinit';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../consts/consts';
import LoginLink from './components/LoginLink';

function PageChat(){

   const handlerClick = () => {
       signOut(auth);
   }

   return(
      <div className='chatWrapper'>
         <div className='chat'>
            <div className='chat__container'>
               <div className='sidebar'>
                  <div className='nav'>
                     <div className='nav__logo'>Chat App</div>
                     <div className='nav__userinfo'>
                        <img className='nav__img'></img>
                        <span>sergey</span>
                        <Link to={LOGIN_ROUTE}> 
                           <button className='nav__button' onClick={handlerClick}>logout</button>
                        </Link>
                     </div>
                  </div>
                  <div className='searchUser'>
                     <form className='searchUser__form'>
                        <input className='searchUser__form--input' type="text" placeholder='Find a user'></input>
                     </form>
                  </div>
                  <div className='chats'></div>
               </div>
               <div className='chat__field'>
                  <div className='chat__field--info'>
                     <span></span>
                     <div className='chatNav'>
                        <img src={img2}></img>
                        <img src={img3}></img>
                        <img src={img4}></img>
                     </div>
                  </div>
                  <div className='chat__field--messages'>lknlkln;lkn;lknlkjkjkj</div>
                  <div className='chat__field--form'>
                     <input className='chat__input' placeholder='Type something...'></input>
                     <div className='send'>
                        <img src={img5}></img>
                        <input className='file' type="file" id="file"></input>
                        <label for="file">
                           <img src={img6}></img>
                        </label>
                        <button className='chat__button'>Send</button>
                     </div>
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
    
   )
}
export default PageChat;