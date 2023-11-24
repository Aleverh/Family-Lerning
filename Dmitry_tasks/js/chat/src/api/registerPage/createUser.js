import React from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import docRef from "./docRef";
const createUser = (data, auth, email, password, selectedFile) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return userCredential.user;
        })
        .then((user) => docRef(user, selectedFile, data))
        .catch(() => alert("Something went wrong"))
}
export default createUser