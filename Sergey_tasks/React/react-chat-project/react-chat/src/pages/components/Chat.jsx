import React from 'react';
import "../components/main.css";
import ChatInfo from './ChatInfo';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

function Chat(){

   return(
      <div className='chat__field'>
         <ChatInfo/>
         <ChatMessage/>
         <ChatInput/>
      </div>
   )
}
export default Chat;