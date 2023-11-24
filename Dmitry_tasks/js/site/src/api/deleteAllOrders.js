import {
    collection, deleteDoc, doc, getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';

function deleteAllOrders(id) {
    if (id) {
        getDocs(collection(db, 'orders', id, 'info')).then((data) => {
            data.forEach((item) => {
                const orderName = (item.data().productId);
                console.log(orderName);
                deleteDoc(doc(db, 'orders', id, 'info', orderName));
            });
        });
    }
}
export default deleteAllOrders;
