import React, { useState } from 'react';
import "../components/main.css";
import SideBar from './SideBar';
import Chat from './Chat';
import Context from '../Context';
import useUser from './useUser';

function ContextProvider(){
   const authUser = useUser();

   const [currentUser, setCurrentUser] = useState();
   const [messages, setMessages] = useState([]);
   const [chatId, setChatId] = useState();
   const [currentChatId, setCurrentChatId] = useState();


   // console.log(chatId);


   const valueData = {
      currentUser,
      setCurrentUser,
      messages,
      setMessages,
      chatId,
      setChatId,
      currentChatId,
      setCurrentChatId
   }

   return(
      <Context.Provider value={valueData}>
         <div className='chatWrapper'>
            <div className='chat'>
               <div className='chat__container'>
                  <SideBar authUser={authUser}/>
                  <Chat authUser={authUser}/>
               </div>
            </div>
         </div>
      </Context.Provider>
    
   )
}
export default ContextProvider;