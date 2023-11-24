import React from "react";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../firebase";
const setChats = (user, currentUser) => {
    const chatId = currentUser.uid + user.id;
    setDoc(doc(db, "userChats", `${currentUser.uid}`, "allUsers", `${user.id}`), {
        chatId,
        date: new Date(),
        photoUrl: user.photoUrl,
        displayName: user.displayName,
        id: user.id
    });
    setDoc(doc(db, "userChats", `${user.id}`, "allUsers", `${currentUser.id}`), {
        chatId,
        date: new Date(),
        photoUrl: currentUser.photoUrl,
        displayName: currentUser.displayName,
        id: currentUser.uid
    });
}
export default setChats