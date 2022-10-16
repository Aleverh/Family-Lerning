import React from 'react';
import "../components/main.css";
import Message from './Message';


function ChatMessage(){
   return(
      <div className='chat__field--messages'>
         <Message/>
      </div>
   )
}
export default ChatMessage;