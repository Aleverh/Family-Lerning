import {
    collection, deleteDoc, doc, getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';

const deleteProduct = async (productId, category) => {
    await deleteDoc(doc(db, 'products', productId));
    getDocs(collection(db, 'products')).then((products) => {
        const foundProducts = products.docs.filter((item) => item.data().category === category);
        if (foundProducts.length === 0) {
            deleteDoc(doc(db, 'category', category));
        }
    });
};
export default deleteProduct;
