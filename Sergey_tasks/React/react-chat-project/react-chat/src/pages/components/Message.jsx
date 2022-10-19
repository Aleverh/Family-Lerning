import React, { useContext } from 'react';
import "../components/main.css";
import Context from '../Context';


function Message({authUser}){
   const { messages } = useContext(Context);

   return(
      <div className='messages'>
         { messages?.map((message) => (
            message.uid === authUser?.uid 
               ? 
                  <div key={Math.random()} className='message'>
                     <div className='message__info'>
                        <img src={message.photoURL}></img>
                        <span>time</span>
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
                        <span>time</span>
                     </div>
                  </div>
         ))}
      </div>
   )
}
export default Message;
















   // useEffect(() => {
   //    async function showMessages(){
   //       const usersMessages =  collection(db, "messages");
   //       const userFound =  query(usersMessages, where(("displayName", "==", valueData.currentUser.displayName)));
   //       const queryUser = await getDocs(userFound);
   //       valueData.setMessages(queryUser.docs.map(elem => elem.data()));
   //       console.log(valueData.messages);
   //    }
   //    showMessages();
   // },[]);