import {
    doc, getDoc, setDoc, updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

const updateProductInfo = async (id, name, category, description, imagesUrl, price) => {
    await updateDoc(doc(db, 'products', id), {
        name,
        category,
        description,
        imagesUrl,
        price,
    });
    await getDoc(doc(db, 'category', category)).then((data) => {
        if (data.data()) {
            return null;
        } setDoc(doc(db, 'category', category), {
            category,
        });
    });
};
export default updateProductInfo;
