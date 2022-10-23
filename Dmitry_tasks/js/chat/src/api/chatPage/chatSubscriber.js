import React from "react";
import {doc, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";
const chatSubscriber = (elem, setLastMessage) => {
    onSnapshot(doc(db, "Chats", `${elem.chatId}`), (doc) => {
        const data = doc.data();
        if (data?.lastMessage?.text){
            setLastMessage(data.lastMessage.text);
        } else setLastMessage("")
    })
}
export default chatSubscriber