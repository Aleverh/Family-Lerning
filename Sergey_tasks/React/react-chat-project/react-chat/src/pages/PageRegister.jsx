import React from 'react';
import "../components/main.css";
import avatar  from "../img/img1.png";
import LoginLink from "./components/LoginLink";
import Logotype from '../components/logotype/Logotype';

import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../components/firebaseinit/firebaseinit';

function PageRegister(){
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = ((data) => {
      createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
         const user = userCredential.user;
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
      });
   })
   return(
      <div className='formWrapper'>
          <Logotype/>
         <span className="title">Register</span>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input required type="text" placeholder="display name" ></input>
            <input required type="email" placeholder="email"  {...register("email")}></input>
            <input required type="password" placeholder="password"  {...register("password")}></input>
            <input required type="file" id="file" className="file"></input>
            <label htmlFor="file">
               <img src={avatar}></img>
               <span>Add an avatar</span>
            </label>
            <button type="submit">Sign up</button>
         </form>
         <LoginLink/>
      </div>
   
   )
}
export default PageRegister;