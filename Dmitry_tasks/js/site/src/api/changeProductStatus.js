import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const changeProductStatus = (productId, newStatus) => {
    updateDoc(doc(db, 'products', productId), {
        status: newStatus,
    });
};
export default changeProductStatus;
