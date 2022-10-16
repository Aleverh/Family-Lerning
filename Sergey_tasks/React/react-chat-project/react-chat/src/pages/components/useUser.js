import { useState, useEffect, useTransition } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc} from "firebase/firestore"; 
import { auth, db } from '../../components/firebaseinit/firebaseinit';

const useUser = () => {
   const [user, setUser]= useState([]);
   const [userAuth, loading] = useAuthState(auth);
   const uid = userAuth?.uid;

   useEffect(() => {
      const getUser = async() => {
         const userDoc = doc(db, "users", uid);
         const queryUser =  await getDoc(userDoc);
         if (queryUser.exists()) {
            setUser(queryUser.data());
         } 
      }
      getUser();
   }, [uid]);
   return user;
}
export default useUser;