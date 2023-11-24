import React from "react";
import {ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase";

function upload(selectedFile, id) {
    const storageRef = ref(storage, `${id}`);
    return uploadBytes(storageRef, selectedFile)
}
export default upload