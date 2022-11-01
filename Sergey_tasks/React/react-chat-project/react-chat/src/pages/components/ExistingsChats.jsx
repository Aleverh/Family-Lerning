import React, { useContext, useState, useEffect } from 'react';
import "../components/main.css";
import { useForm } from "react-hook-form";
import { db } from '../../components/firebaseinit/firebaseinit';
import { collection, getDocs, query, where  } from "firebase/firestore"; 
import Context from '../Context';
import UsersChat from './UsersChat';


function ExistingsChats({authUser, foundUsers}){
   const [users, setUsers] = useState([]);

   useEffect(() => {
      async function showChats(){
         const chatRef =  collection(db, "usersChat");
         const chatFound = query(chatRef, where("usersId", "array-contains", authUser.uid));
         const queryUsersChat = await getDocs(chatFound);
         const chats = queryUsersChat.docs.map(elem => elem.data());
         const id = chats.map(elem => elem.usersId.find(elem => elem !== authUser.uid));

         const usersRef =  collection(db, "users");
         const userFound = query(usersRef, where("uid", "in", id));
         const queryUser = await getDocs(userFound);
         const userDataChats = queryUser.docs.map(elem => {
           const data =  elem.data();
           return {
              ...data,
              chatId: chats.find(elem => elem.usersId.includes(data.uid)).chatId
           }
         });
         setUsers(userDataChats);
      }
      showChats();
   }, [authUser]);

   return(
      <div className='active-chat'>
         {users.map((user) => <UsersChat key={user.chatId} chat={user} authUser={authUser}/>)}
         {foundUsers.map((user) => <UsersChat key={user.uid} chat={user} authUser={authUser}/>)}
      </div>
   )
}
export default ExistingsChats;