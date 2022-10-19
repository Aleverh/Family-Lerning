import React, { useContext, useState, useRef, useEffect } from 'react';
import "../components/main.css";
import { useForm } from "react-hook-form";
import { db } from '../../components/firebaseinit/firebaseinit';
import { collection, getDocs, query, where  } from "firebase/firestore"; 
import Context from '../Context';


function FindUser({setFoundUsers, foundUsers}){
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   // const { setChatId } = useContext(Context);
   
   const inputInfo = register("displayName");

   const onSubmit  = async(data, e) => {
      const usersRef =  collection(db, "users");
      const userFound = query(usersRef, where("displayName", "==", data.displayName));
      const queryUser = await getDocs(userFound);
      const users = queryUser.docs.map(elem => elem.data());
      setFoundUsers(foundUsers.concat(users));
      reset();
   }

   return(
      <div className='searchUser'>
         <form className='searchUser__form' onSubmit={handleSubmit(onSubmit)}>
            <input className='searchUser__form--input' placeholder='Find a user' {...inputInfo}></input>
         </form>
      </div>
   )
}
export default FindUser;