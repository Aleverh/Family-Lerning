import React, { useState } from 'react';
import "../components/main.css";
import SideBar from './SideBar';
import Chat from './Chat';
import Context from '../Context';

function ContextProvider(){
   const [userData, setUserData] = useState([]);
   const [currentUser, setCurrentUser] = useState();
   const [authUser, setAuthUser] = useState([]);
   const [messages, setMessages] = useState([]);
   const [chatsAuthUsers, setChatsAuthUsers] = useState(null);
   const [chatId, setChatId] = useState();

   const valueData = {
      userData,
      setUserData,
      currentUser,
      setCurrentUser,
      authUser,
      setAuthUser,
      messages,
      setMessages,
      chatsAuthUsers,
      setChatsAuthUsers,
      chatId,
      setChatId
   }

   return(
      <Context.Provider value={valueData}>
         <div className='chatWrapper'>
            <div className='chat'>
               <div className='chat__container'>
                  <SideBar/>
                  <Chat/>
               </div>
            </div>
         </div>
      </Context.Provider>
    
   )
}
export default ContextProvider;