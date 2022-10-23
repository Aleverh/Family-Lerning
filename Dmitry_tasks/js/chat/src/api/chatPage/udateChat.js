import React from "react";
import {arrayUnion, doc, updateDoc} from "firebase/firestore";
import {db} from "../../firebase";
const updateChat = (user, message) => {
    return updateDoc(doc(db, "Chats", `${user.chatId}`), {
        messages: arrayUnion(message),
        lastMessage: message
    }, { merge: true })
}
export default updateChat