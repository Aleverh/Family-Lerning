import React from 'react';
import "./main.css";
// import { Link } from 'react-router-dom';

function LoginLink(){
   return(
      <p> "You do have an account?"
         {/* <Link to="/login">Login</Link> */}
         <a href="/login">Login</a>
      </p>
   )
}
export default LoginLink;