import React from "react";
import upload from "../registerPage/upload";
import {getDownloadURL} from "firebase/storage";
const getPhotoUrl = async (data) => {
    const res = await upload(data.img[0], new Date);
    return  getDownloadURL(res.ref);
}
export default getPhotoUrl