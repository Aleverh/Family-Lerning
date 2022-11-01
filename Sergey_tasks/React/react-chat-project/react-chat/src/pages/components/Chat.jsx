import React, { useState, useContext, useEffect } from 'react';
import "../components/main.css";
import ChatInfo from './ChatInfo';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import Context from '../Context';
import { db } from '../../components/firebaseinit/firebaseinit';
import { collection, doc, setDoc, addDoc, Timestamp, query, where, getDocs, onSnapshot } from "firebase/firestore"; 

function Chat({authUser, chatId}){
   const [currentUser, setCurrentUser] = useState();
   const [chat, setChat] = useState([]);

   useEffect(() => {
      async function searchCurrentUser(){
         if(chatId){
            const chat = collection(db, "usersChat"); 
            const chatFound = query(chat, where("chatId", "==", chatId));
            const chatUser = await getDocs(chatFound);
            const chatData = chatUser.docs.map(elem => elem.data());
            const uid = chatData[0].usersId[1];
            
            const user = collection(db, "users"); 
            const userFound = query(user, where("uid", "==", uid));
            const searcUser = await getDocs(userFound);
            const currentUser = searcUser.docs.map(elem => elem.data());
            setCurrentUser(currentUser[0]);
         }
      }
      searchCurrentUser();
   }, [chatId]);

   useEffect(() => {
      if(!chatId) return;
      const unsub = onSnapshot(doc(db, "usersChat", chatId), (doc) => {
         const data = doc.data();
         setChat(data.chatMessages);
      });
   }, [chatId]);

   return(
      <div className='chat__field'>
         <ChatInfo currentUser={currentUser}/>
         <ChatMessage authUser={authUser} chat={chat}/>
         <ChatInput authUser={authUser}/>
      </div>
   )
}
export default Chat;