import React from 'react';
import "./main.css";
import avatar  from "./img1.png";
import LoginLink from './LoginLink';

function PageRegister(){
   return(
      <>
         <span className="title">Register</span>
         <form>
            <input required type="text" placeholder="display name"></input>
            <input required type="email" placeholder="emale"></input>
            <input required type="password" placeholder="password"></input>
            <input required type="file" id="file" className="file"></input>
            <label htmlFor="file">
               <img src={avatar}></img>
               <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
         </form>
         <LoginLink></LoginLink>
      </>
   
   )
}
export default PageRegister;