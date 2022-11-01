import React, { useContext, useState, useEffect, useRef } from 'react';
import "../components/main.css";
import { useForm } from "react-hook-form";
import Context from '../Context'
import { collection, doc, setDoc, addDoc, Timestamp, query, where, getDocs, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes,  getDownloadURL } from "firebase/storage";

import img5  from "../../img/img5.png";
import img6  from "../../img/img6.png";
import { db, storage } from '../../components/firebaseinit/firebaseinit';
import { async } from '@firebase/util';
import 'firebase/firestore';

function ChatInput({authUser}){
   const { chatId } = useContext(Context);
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
 
   const onSubmit = (async(data) => {
      if(data.data || data.file){
         // console.log(data.file.length);
         // console.log(data.file);
         
         const imgMessageURL = await uploadFiles(data.file);
         const docData = 
         {
            uid: authUser.uid,
            photoURL: authUser.photoURL,
            messages: data.data,
            time: "time",
            imgMessage: imgMessageURL
         }
         const updateLastMessage = doc(db, "users", authUser.uid);
         await updateDoc(updateLastMessage, {
            lastMessage: data.data
         });

         const updateMessage = doc(db, "usersChat", chatId);
         await updateDoc(updateMessage, {
            lastMessage: data.data,
            chatMessages: arrayUnion(docData),
            imgMessage: imgMessageURL
         });
         reset();
      }
   });
   const uploadFiles = async(data) => {
      if(data.length === 0) return "";
      const storageRef = ref(storage, `images/${data[0].name}`);
      const uploadTask = await  uploadBytes(storageRef, data[0]);
      const imgMessageURL = await getDownloadURL(uploadTask.ref);
      return  imgMessageURL;
   };


   return(
      // <form className='chat__field--form' onClick={handleSubmit(onSubmit)}>
      <form className='chat__field--form'>
         <input className='chat__input' placeholder='Type something...' {...register("data")}></input>
         {/* <div className='send' htmlFor="file_input">
            <img src={img5}></img>
            <label htmlFor="file"><img src={img6}></img></label>
            <button className='chat__button' type='submit'>Send</button>
         </div> */}
         <label htmlFor="file">
            <img src={img5}></img>
         </label>
         <input required type="file" id="file" className="file" {...register("file")} ></input>
         <button className='chat__button' type='button' onClick={handleSubmit(onSubmit)}>Send</button>
      </form>
   )
}
export default ChatInput;