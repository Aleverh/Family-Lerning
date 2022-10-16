import React, { useContext, useEffect } from 'react';
import "../components/main.css";
import Context from '../Context';
import img2  from "../../img/img2.png";
import img3  from "../../img/img8.png";
import img4  from "../../img/img4.png";
// import { async } from '@firebase/util';
import { db } from '../../components/firebaseinit/firebaseinit';
import { collection, doc, setDoc, addDoc, Timestamp, query, where, getDocs, onSnapshot } from "firebase/firestore"; 

function ChatInfo(){
   const valueData = useContext(Context);
   const currentUser = valueData.currentUser?.photoURL;

   useEffect(() => {
      async function setDataChat(){
         if(!valueData.currentUser) return;
         const chatId = valueData.authUser.uid + valueData.currentUser?.uid;
         valueData.setChatId(chatId);

         const docData = {
            chatMessages: "",
            lastMessage: "",
            usersId: [valueData.authUser.uid, valueData.currentUser?.uid],
            chatId: chatId
         }

         if (valueData.chatsAuthUsers === null){ 
            const usersChat = await  setDoc(doc(db, "usersChat", chatId), docData);
            valueData.setChatsAuthUsers(valueData.userData.concat(usersChat));
         } 
         else {
            const idFromChat = valueData.chatsAuthUsers.map(elem => elem?.uid);
            const isUserChat = idFromChat.find((elem) => valueData.currentUser.uid === elem ? elem : undefined);
            if(isUserChat === undefined){
               const usersChat = await  setDoc(doc(db, "usersChat", chatId), docData);
               valueData.setChatsAuthUsers(valueData.userData.concat(usersChat));
            }
         }
         
         const usersMessages =  collection(db, "usersChat");
         const authUserFound =  query(usersMessages, where("usersId", "in", [[valueData.authUser.uid, valueData.currentUser.uid], [valueData.currentUser.uid, valueData.authUser.uid]]));
         const chatAuthUser = await getDocs(authUserFound);
         const chat = chatAuthUser.docs.map(elem => elem.data());

         const chatMessages = chat[0].chatMessages;
         valueData.setMessages(chatMessages);
         valueData.setChatId(chat[0].chatId);
         
      }
      setDataChat(); 
   }, [valueData.currentUser]);

   return(
      <div className='chat__field--info'>
         {currentUser ? <img src={currentUser} className="nav__img"></img> : <img></img>}
         <span>{valueData.currentUser?.displayName}</span>
         <div className='chatNav'>
            <img src={img2}></img>
            <img src={img3}></img>
            <img src={img4}></img>
         </div>
      </div>
   )
}
export default ChatInfo;