
import React, { useContext } from 'react';
import "../../components/main.css";
import Context from '../Context';

function UsersChat({users}){
   const {setCurrentUser} = useContext(Context);

   const handlerClick = (users) => {
      setCurrentUser(users);
   }
   return(
      <div className='active-user__row' onClick={ () => handlerClick(users)}>
         <img src={users.photoURL} className="nav__img"></img>
         <div className='userChatData'>
            <span className='active-user__name'>{users.displayName}</span>
            <p className='userChatData__p'>{users.lastMessage}</p>
         </div>
      </div>
   )
}
export default UsersChat;
