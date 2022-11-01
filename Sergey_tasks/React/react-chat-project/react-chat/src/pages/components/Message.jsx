import React from 'react';
import "../components/main.css";

function Message({authUser, chat}){
   const today = new Date();
   if(chat)
   return(
      <div className='messages'>
         { chat.map((message) => (
            message.uid != authUser?.uid 
               ? 
                  <div key={Math.random()} className='message'>
                      <img src={message.imgMessage}></img>
                     <div className='message__info'>
                        <img src={message.photoURL}></img>
                        <span className='time'> {`${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`}</span>
                     </div>
                     <div  className='message__content'>
                        <p>{message.messages}</p>
                     </div>
                  </div>
               : 
                  <div key={Math.random()} className='messageqq'>
                     <div  className='message__content'>
                        <p>{message.messages}</p>
                     </div>
                     <div className='message__info'>
                        <img src={message.photoURL}></img>
                        <span className='time'>{`${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`}</span>
                     </div>
                     <img src={message.imgMessage}></img>
                  </div>
         ))}
      </div>
   )
}
export default Message;