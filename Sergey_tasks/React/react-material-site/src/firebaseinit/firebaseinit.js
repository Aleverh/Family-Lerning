import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBtvy7LBx5-2XXpsPnAu_r6kJWTIxD_FGs',
    authDomain: 'react-material-site.firebaseapp.com',
    projectId: 'react-material-site',
    storageBucket: 'react-material-site.appspot.com',
    messagingSenderId: '1083639575700',
    appId: '1:1083639575700:web:a3caade653e181bbd3f081',
    measurementId: 'G-VXEFVSSB8H',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
