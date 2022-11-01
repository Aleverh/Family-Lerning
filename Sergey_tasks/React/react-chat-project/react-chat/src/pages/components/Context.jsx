import React, { useState } from 'react';
import "../components/main.css";
import SideBar from './SideBar';
import Chat from './Chat';
import Context from '../Context';
import useUser from './useUser';

function ContextProvider(){
   const authUser = useUser();
   const [messages, setMessages] = useState([]);
   const [chatId, setChatId] = useState();

   const valueData = {
      messages,
      setMessages,
      chatId,
      setChatId,
   }

   return(
      <Context.Provider value={valueData}>
         <div className='chatWrapper'>
            <div className='chat'>
               <div className='chat__container'>
                  <SideBar authUser={authUser}/>
                  <Chat authUser={authUser} chatId={chatId}/>
               </div>
            </div>
         </div>
      </Context.Provider>
   )
}
export default ContextProvider;