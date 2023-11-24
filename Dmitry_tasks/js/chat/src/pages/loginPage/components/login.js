import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../firebase";
 const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
export default signIn