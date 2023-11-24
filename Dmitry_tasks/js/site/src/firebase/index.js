import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBT1tmYMEInIcLnV9iVZxNrRXlj6gCLbJk',
    authDomain: 'site-9a829.firebaseapp.com',
    projectId: 'site-9a829',
    storageBucket: 'site-9a829.appspot.com',
    messagingSenderId: '646197790064',
    appId: '1:646197790064:web:6f97055f9e1b39a0353bb5',
};
export const provider = new GoogleAuthProvider();
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
