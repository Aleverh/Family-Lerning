import React from "react";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";

const subscriber = (callback, id) => {
    return onSnapshot(collection(db,  "userChats", id, "allUsers"), (doc) => {
        callback(doc.docs.map(item => item.data()))
    })
}
export default subscriber;