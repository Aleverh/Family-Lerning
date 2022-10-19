import { async } from '@firebase/util';
import React, { useContext, useState, useEffect, useRef } from 'react';
import "../components/main.css";
import ExistingsChats from './ExistingsChats';
import FoundUsers from './FoundUsers';
import Context from '../Context';
import { db } from '../../components/firebaseinit/firebaseinit';
import { collection, doc, setDoc, addDoc, Timestamp, query, where, getDocs, onSnapshot } from "firebase/firestore"; 

function SearchUser({authUser, foundUsers}){
   const { currentUser, setCurrentChatId, chatId, setMessages }  = useContext(Context);

   useEffect(() => {
      async function setDataChat(){
         if(!currentUser) return;
         const newChatId = authUser.uid + currentUser?.uid;
         console.log(newChatId);

         const docData = {
            chatMessages: "",
            lastMessage: "",
            usersId: [authUser.uid, currentUser?.uid],
            chatId: newChatId
         }
         const validChatId = chatId.find(elem => elem === newChatId);
         console.log(validChatId);
         if(!validChatId || undefined){
            const usersChat = await  setDoc(doc(db, "usersChat", newChatId), docData);
            // setCurrentChatId(newChatId);
         }
         setCurrentChatId(newChatId);
         
         const usersMessages =  collection(db, "usersChat");
         const authUserFound =  query(usersMessages, where("usersId", "in", [[authUser.uid, currentUser.uid], 
         [currentUser.uid, authUser.uid]]));
         const chatAuthUser = await getDocs(authUserFound);
         const chat = chatAuthUser.docs.map(elem => elem.data());
         const chatMessages = chat[0].chatMessages || [];
         console.log(chatMessages);
         setMessages(chatMessages);


      }
      setDataChat(); 
   }, [currentUser]);

      return(
         <div className='active-user' >
            <ExistingsChats authUser={authUser}/>
            {  foundUsers?.map((elem) => (
               <FoundUsers elem={elem} key={elem.uid}/>
            ))} 
         </div>
      )
}
export default SearchUser;