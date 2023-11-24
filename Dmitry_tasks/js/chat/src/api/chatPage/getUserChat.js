import React from "react";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../../firebase";
const getUserChat = (user) => {
    getDoc(doc(db, "Chats", `${user.chatId}`))
        .then((docs) => {
            if (docs.data() === undefined){
                setDoc(doc(db, "Chats", `${user.chatId}`), {
                    messages: [],
                    lastMessage: [],
                })

            }
        })
}
export default getUserChat
