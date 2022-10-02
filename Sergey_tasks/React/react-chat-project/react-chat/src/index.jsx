import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";

import { app } from './components/firebaseinit/firebaseinit';
import { auth } from './components/firebaseinit/firebaseinit';
import { firestore } from './components/firebaseinit/firebaseinit';

import firebase from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import "firebase/auth";
import  "firebase/firestore";



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCqhn00ePJxD1U5kZKH_6yuegtvzYPRNb0",
//   authDomain: "react-chat-application-21439.firebaseapp.com",
//   projectId: "react-chat-application-21439",
//   storageBucket: "react-chat-application-21439.appspot.com",
//   messagingSenderId: "545774732070",
//   appId: "1:545774732070:web:8ef4f1559b30a4467df7e7",
//   measurementId: "G-KN8PCRKFZ3"
// };

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App></App>
  </React.StrictMode>
);


