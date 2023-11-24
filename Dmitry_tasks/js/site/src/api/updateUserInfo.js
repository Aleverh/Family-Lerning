import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import upload from './upload';

const updateUserInfo = (id, email, name, fileList, telephone) => {
    if (fileList.length !== 0) {
        const image = new Promise((res) => {
            res(upload(fileList));
        });
        image.then((data) => {
            updateDoc(doc(db, 'users', id), {
                email,
                name,
                avatar: data,
                telephone,
            });
            return data;
        });
    } else {
        updateDoc(doc(db, 'users', id), {
            email,
            name,
            telephone,
        });
    }
};
export default updateUserInfo;
