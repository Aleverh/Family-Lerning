import React from 'react';
import "../components/main.css";
import RegisterLink from './components/RegisterLink';
import Logotype from '../components/logotype/Logotype';
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../components/firebaseinit/firebaseinit';

function PageLogin(){
   const { register, handleSubmit, formState: { errors } } = useForm();

   const onSubmit = ((data) => {
      signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      // console.log(auth);
   })

   return(
      <div className='formWrapper'>
         <Logotype/>
         <span className="title">Login</span>
         <form onSubmit={handleSubmit(onSubmit)} className="formauth">
            <input required type="email" placeholder="email"  {...register("email")} className="input__auth"></input>
            <input required type="password" placeholder="password"  {...register("password")} className="input__auth"></input>
            <button className='abutton' type='submit'>Sign up</button>
         </form>
         <RegisterLink/>
      </div>
   )
}
export default PageLogin;