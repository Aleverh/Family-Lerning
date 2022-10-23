import React from "react";
import {getDownloadURL} from "firebase/storage";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../firebase";
import upload from "./upload";
const docRef = async (user, selectedFile, data) => {
    const res = await upload(selectedFile, user.uid);

    const photoUrl = await getDownloadURL(res.ref);

    return setDoc(doc(db, "users", user.uid), {
        email: user.email,
        id: user.uid,
        photoUrl,
        displayName: data.displayName
    });
}
export default docRef