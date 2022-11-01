import React from 'react';
import "../components/main.css";
import img2  from "../../img/img2.png";
import img3  from "../../img/img8.png";
import img4  from "../../img/img4.png";

function ChatInfo({currentUser={}}){
   return(
      <div className='chat__field--info'>
         {currentUser.photoURL && <img src={currentUser.photoURL} className="nav__img"></img>}
         <span>{currentUser.displayName}</span>
         <div className='chatNav'>
            <img src={img2}></img>
            <img src={img3}></img>
            <img src={img4}></img>
         </div>
      </div>
   )
}
export default ChatInfo;