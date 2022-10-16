import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import firebase from "firebase";
// import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyCqhn00ePJxD1U5kZKH_6yuegtvzYPRNb0",
   authDomain: "react-chat-application-21439.firebaseapp.com",
   projectId: "react-chat-application-21439",
   storageBucket: "react-chat-application-21439.appspot.com",
   messagingSenderId: "545774732070",
   appId: "1:545774732070:web:8ef4f1559b30a4467df7e7",
   measurementId: "G-KN8PCRKFZ3"
 };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// export const firestore = firebase(firestore);


