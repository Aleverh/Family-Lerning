import React, { useState, useContext } from 'react';
import "../components/main.css";
import avatar  from "../img/img1.png";
import LoginLink from "./components/LoginLink";
import Logotype from '../components/logotype/Logotype';

import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from '../components/firebaseinit/firebaseinit';
import { collection, doc, setDoc, addDoc, getDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, uploadBytesResumable,  getDownloadURL, uploadTask } from "firebase/storage";
import Context from './Context';

function PageRegister(){
   const { register, handleSubmit, formState: { errors } } = useForm();
   
   const onSubmit = (async(data) => {
      const photoURL = await  uploadFiles(data.file);

      createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
         return userCredential.user;
      })
      .then(({uid})=>{
         // console.log(photoURL);
         const docRef =  setDoc(doc(db, "users", uid), {
            displayName: data.displayName,
            email: data.email,
            photoURL: photoURL,
            uid: uid,
            lastMessage: ""
         });
      })

      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log("Error");
      });
   })

   const uploadFiles = async(data) => {
      // console.log(data);
      const storageRef = ref(storage, `images/${data[0].name}`);
      const uploadTask = await  uploadBytes(storageRef, data[0]);
      const photoURL = await getDownloadURL(uploadTask.ref);
      return  photoURL;
   };


   return(
      <div className='formWrapper'>
         <Logotype/>
         <span className="title">Register</span>
         <form onSubmit={handleSubmit(onSubmit)} className="formauth">
            <input required  placeholder="display name" {...register("displayName")} className="input__auth"></input>
            <input required type="email" placeholder="email"  {...register("email")} className="input__auth"></input>
            <input required type="password" placeholder="password"  {...register("password")} className="input__auth"></input>
            <label htmlFor="file">
               <img src={avatar}></img>
               <span>Add an avatar</span>
            </label>
            <input required type="file" id="file" className="file" {...register("file")} ></input>
            <button type="submit">Sign up</button>
         </form>
         <LoginLink/>
      </div>
   )
}
export default PageRegister;


