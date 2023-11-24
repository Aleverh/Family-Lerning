import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const productSubscriber = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'products'), (doc) => {
            setData(doc);
        });
        return () => unsub();
    }, []);
    return data;
};
export default productSubscriber;
