import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const deleteOrder = (order, id) => {
    if (order) {
        deleteDoc(doc(db, 'orders', id, 'info', order));
    }
};
export default deleteOrder;
