import React, {useEffect, useState} from "react";
import {doc, getDoc, onSnapshot} from "firebase/firestore";
import {db} from "../firebase";
const useMessages = (currentUser, user) => {
    const [messages, setMessages] = useState(null);
    const [chatId, setChatId] = useState(null);

    useEffect(() => {
        if (!user) {
            return
        }
        getDoc(doc(db, "userChats", currentUser.uid, "allUsers", user.id))
            .then((docs) => setChatId(docs.data().chatId));
    }, [user]);

    useEffect(() => {
        if (!chatId) {
            return
        }
        const unsub = onSnapshot(doc(db, "Chats", chatId), (doc) => {
            if (doc.data()){
                if(doc.data().messages) {
                    setMessages(doc.data().messages)
                }
            }
        });

        return () => unsub();
    }, [chatId]);
    return messages
}
export default useMessages