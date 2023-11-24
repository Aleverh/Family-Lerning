import React from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase";
const getUsers = (userName) => {
    return getDocs(query(collection(db, "users"), where("displayName", "==", userName)));
}
export default getUsers