import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyANedyyL8HRU5wa11w3IVxKBOHyzmzjH4Y",
    authDomain: "chat-5cff1.firebaseapp.com",
    projectId: "chat-5cff1",
    storageBucket: "chat-5cff1.appspot.com",
    messagingSenderId: "1083860755692",
    appId: "1:1083860755692:web:a32b4f605e473b21b0b1c9"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
export const auth = getAuth(app);
