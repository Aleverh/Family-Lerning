import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTER_ROUTE } from '../../consts/const';

function RegisterLink(){
   return(
      <p> "You don't have an account?"
         <Link to={REGISTER_ROUTE}>Register</Link>
      </p>
   )
}
export default RegisterLink;