import { async } from '@firebase/util';
import React, { useContext, useState, useEffect, useRef } from 'react';
import "../components/main.css";
import Context from '../Context';
import { db } from '../../components/firebaseinit/firebaseinit';
import { collection, query, where, getDocs } from "firebase/firestore"; 

function ActiveUser(){
   const valueData = useContext(Context);

   //выбрать все чаты где есть залогиненый пользователь
   useEffect(() => {
      async function showChats(){
         const chatRef =  collection(db, "usersChat");
         const chatFound = query(chatRef, where("usersId", "array-contains",  valueData.authUser?.uid));
         const queryUsersChat = await getDocs(chatFound);
         const users = queryUsersChat.docs.map(elem => elem.data());
         const id =  users.map(elem => {
           const www =  elem.usersId.find(elem => elem != valueData.authUser?.uid);
           return www;
         });

         const usersRef =  collection(db, "users");
         const userFound = query(usersRef, where("uid", "in", id.map(elem => elem)));
         const queryUser = await getDocs(userFound);
         const userDataChats = queryUser.docs.map(elem => elem.data());
         valueData.setUserData(valueData.userData.concat(userDataChats)); 
         valueData.setChatsAuthUsers(userDataChats);
      }
      showChats();
   }, [valueData.authUser]);

   const handlerClick = (user) => {
      valueData.setCurrentUser(user);
   }
      return(
         <div className='active-user' >
            {  valueData.userData.map((elem) => (
               <div key={elem.uid} className='active-user__row' onClick={ () => handlerClick(elem)}>
                  <img src={elem.photoURL} className="nav__img"></img>
                  <div className='userChatData'>
                     <span className='active-user__name'>{elem.displayName}</span>
                     <p className='userChatData__p'>{elem.lastMessage}</p>
                  </div>
               </div>
            ))}
         </div>
      )
}
export default ActiveUser;