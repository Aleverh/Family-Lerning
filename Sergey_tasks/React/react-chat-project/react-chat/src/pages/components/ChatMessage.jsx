import React from 'react';
import "../components/main.css";
import Message from './Message';


function ChatMessage({chat, authUser}){
   return(
      <div className='chat__field--messages'>
         <Message chat={chat} authUser={authUser}/>
      </div>
   )
}
export default ChatMessage;