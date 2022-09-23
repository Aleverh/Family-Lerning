import React from 'react';
import "./main.css";
// import { Link } from 'react-router-dom';

function RegisterLink(){
   return(
      <p> "You don't have an account?"
         {/* <Link to="/register">Register</Link> */}
         <a href="/register">Register</a>
      </p>
   )
}
export default RegisterLink;