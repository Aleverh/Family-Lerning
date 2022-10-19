import React, { useContext, useState, useRef, useEffect } from 'react';
import "../components/main.css";
import { useForm } from "react-hook-form";
import { db } from '../../components/firebaseinit/firebaseinit';
import { collection, getDocs, query, where  } from "firebase/firestore"; 
import Context from '../Context';
import UsersChat from './UsersChat';


function ExistingsChats({authUser}){
   const { setChatId } = useContext(Context);

   const [users, setUsers] = useState([]);
   // console.log(users);

   useEffect(() => {
      async function showChats(){
         const chatRef =  collection(db, "usersChat");
         const chatFound = query(chatRef, where("usersId", "array-contains", authUser.uid));
         const queryUsersChat = await getDocs(chatFound);
         const users = queryUsersChat.docs.map(elem => elem.data());
         const chatId = users.map(elem => elem.chatId);
         setChatId(chatId);
         // console.log(authUser);
         const id =  users.map(elem => {
           const www =  elem.usersId.find(elem => elem !=authUser.uid);
           return www;
         });
         // const bbb = id.map(elem => authUser.uid + elem);
         // const kk = chatId.concat(bbb)
         // setChatId(kk);
         // console.log(kk);

         const usersRef =  collection(db, "users");
         const userFound = query(usersRef, where("uid", "in", id.map(elem => elem)));
         const queryUser = await getDocs(userFound);
         const userDataChats = queryUser.docs.map(elem => elem.data());
         // console.log(userDataChats);
         setUsers(userDataChats);

      }
      showChats();
   }, [authUser]);

   return(
      <div className='active-chat'>
         {  users.map((users) => <UsersChat key={users.uid} users={users}/>)}
      </div>
   )
}
export default ExistingsChats;