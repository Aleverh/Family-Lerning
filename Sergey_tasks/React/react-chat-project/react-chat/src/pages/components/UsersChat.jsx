
import React, { useContext } from 'react';
import "../../components/main.css";
import Context from '../Context';
import { db } from '../../components/firebaseinit/firebaseinit';
import { doc, setDoc } from "firebase/firestore"; 

function UsersChat({chat, authUser}){
   const {setCurrentUser, setChatId} = useContext(Context);

   const handlerClick = async() => {

      if(chat.chatId) return setChatId(chat.chatId);
         const newChatId = authUser.uid + chat.uid;
         const docData = {
            chatMessages: "",
            lastMessage: "",
            usersId: [authUser.uid, chat.uid],
            chatId: newChatId,
            imgMessage: ""
         }
         await  setDoc(doc(db, "usersChat", newChatId), docData);
         setChatId(newChatId);
   }
   return(
      <div className='active-user__row' onClick={ () => handlerClick()}>
         <img src={chat.photoURL}  className="nav__img"></img>
         <div className='userChatData'>
            <span className='active-user__name'>{chat.displayName}</span>
            <p className='userChatData__p'>{chat.lastMessage}</p>
         </div>
      </div>
   )
}
export default UsersChat;
