import {
    doc, getDoc, setDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

const setOrders = (productId, userId, quantity, product, type, navigate) => {
    getDoc(doc(db, 'orders', userId, 'info', productId)).then((data) => {
        const addOrder = () => {
            setDoc(doc(db, 'orders', userId, 'info', productId), {
                productId,
                price: product.price,
                quantity,
                images: product.imagesUrl,
                name: product.name,
            });
        };
        if (data.data()) {
            if (type === 'buy now') {
                return navigate('/profile/myOrders');
            }
            alert('Already in cart!');
        } else {
            if (type === 'buy now') {
                addOrder();
                return navigate('/profile/myOrders');
            } addOrder();
        }
    });
};
export default setOrders;
