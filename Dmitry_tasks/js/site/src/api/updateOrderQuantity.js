import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const updateQuantity = (userId, productId, newQuantity) => {
    updateDoc(doc(db, 'orders', userId, 'info', productId), {
        quantity: newQuantity,
    });
};
export default updateQuantity;
