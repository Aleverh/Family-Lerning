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

function ChatInput(){
   const valueData = useContext(Context);
   const [value, setValue] = useState();
   const { register, handleSubmit, formState: { errors } } = useForm();
 
  
   const sendMessage = (async(data, e) => {
      if(data.data){
         const docData = 
         {
            uid: valueData.authUser.uid,
            photoURL: valueData.authUser.photoURL,
            messages: data.data,
            time: "time"
         }
         const updateLastMessage = doc(db, "users", valueData.authUser.uid);
         await updateDoc(updateLastMessage, {
            lastMessage: data.data
         });
         console.log(valueData.chatId);
         const updateMessage = doc(db, "usersChat", valueData.chatId);
         await updateDoc(updateMessage, {
            lastMessage: data.data,
            chatMessages: arrayUnion(docData)
         });
         valueData.setMessages(valueData.messages.concat(docData));
         setValue("");
      }
   })

   return(
      <form className='chat__field--form' onClick={handleSubmit(sendMessage)}>
         {/* <input className='chat__input' placeholder='Type something...' {...register("data")} ></input> */}
         <input className='chat__input' placeholder='Type something...' {...register("data")}  onChange={(e) => setValue(e.target.value)} value={value}></input>
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