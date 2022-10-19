import React, { useState } from 'react';
import "../components/main.css";
import ChatInfo from './ChatInfo';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

function Chat({authUser}){
   const [currentChatId, setCurrentChatId] = useState();

   return(
      <div className='chat__field'>
         <ChatInfo/>
         <ChatMessage authUser={authUser} />
         <ChatInput authUser={authUser}/>
      </div>
   )
}
export default Chat;