import React, { useContext } from 'react';
import "../../components/main.css";
import Context from '../Context';

function FoundUsers({elem}){
   const {setCurrentUser} = useContext(Context);

   const handlerClick = (users) => {
      setCurrentUser(users);
   }
   return(
      <div className='active-user__row' onClick={ () => handlerClick(elem)} key={elem.uid}>
         <img src={elem.photoURL} className="nav__img"></img>
         <div className='userChatData'>
            <span className='active-user__name'>{elem.displayName}</span>
            <p className='userChatData__p'>{elem.lastMessage}</p>
         </div>
      </div>
   )
}
export default FoundUsers;
