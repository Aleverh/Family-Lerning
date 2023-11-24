import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import useAuth from '../components/Hooks/useAuth';

const ordersSubscriber = () => {
    const [user] = useAuth();
    const [orders, setOrders] = useState(null);
    useEffect(() => {
        if (user.uid) {
            const unsub = onSnapshot(collection(db, 'orders', user.uid, 'info'), (data) => {
                setOrders(data.docs);
            });
            return () => unsub();
        }
    }, [user.uid]);
    return [orders];
};
export default ordersSubscriber;
