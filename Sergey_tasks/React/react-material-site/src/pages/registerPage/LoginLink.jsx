import React from 'react';
import { LOGIN_ROUTE } from '../../consts/const';
import { Link } from 'react-router-dom';

function LoginLink(){
   return(
      <p> "You do have an account?"
         <Link to={LOGIN_ROUTE}>Login</Link>
      </p>
   )
}
export default LoginLink;