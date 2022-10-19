import React, { useContext, useState, useEffect, useRef } from 'react';
import "../components/main.css";
import { useForm } from "react-hook-form";
import Context from '../Context'
import { collection, doc, setDoc, addDoc, Timestamp, query, where, getDocs, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"; 

import img5  from "../../img/img5.png";
import img6  from "../../img/img6.png";
import { db } from '../../components/firebaseinit/firebaseinit';
import { async } from '@firebase/util';
import 'firebase/firestore';

function ChatInput({authUser}){
   const { currentChatId, messages, setMessages} = useContext(Context);

   const { register, handleSubmit, reset, formState: { errors } } = useForm();
 
   const sendMessage = (async(data) => {
      if(data.data){
         const docData = 
         {
            uid: authUser.uid,
            photoURL: authUser.photoURL,
            messages: data.data,
            time: "time"
         }
         const updateLastMessage = doc(db, "users", authUser.uid);
         await updateDoc(updateLastMessage, {
            lastMessage: data.data
         });
         const updateMessage = doc(db, "usersChat", currentChatId);
         await updateDoc(updateMessage, {
            lastMessage: data.data,
            chatMessages: arrayUnion(docData)
         });
         setMessages(messages.concat(docData));
         reset();
      }
   })

   return(
      <form className='chat__field--form' onClick={handleSubmit(sendMessage)}>
         <input className='chat__input' placeholder='Type something...' {...register("data")}></input>
         <div className='send'>
            <img src={img5}></img>
            <input className='file' type="file" id="file"></input>
            <label htmlFor="file"><img src={img6}></img></label>
            <button className='chat__button' type='submit'>Send</button>
         </div>
      </form>
   )
}
export default ChatInput;