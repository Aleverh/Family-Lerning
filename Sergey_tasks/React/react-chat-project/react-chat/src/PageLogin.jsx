import React from 'react';
import "./main.css";
import RegisterLink from './RegisterLink';

function PageLogin(){
   return(
      <>
         <span className="title">Login</span>
         <form>
            <input required type="email" placeholder="emale"></input>
            <input required type="password" placeholder="password"></input>
            <button>Sign up</button>
         </form>
         <RegisterLink></RegisterLink>
      </>
   
   )
}
export default PageLogin;