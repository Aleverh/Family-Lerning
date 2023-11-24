import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const categorySubscriber = () => {
    const [categories, setCategories] = useState();
    useEffect(() => {
        onSnapshot(collection(db, 'category'), (data) => {
            setCategories(data);
        });
    }, []);
    return [categories];
};
export default categorySubscriber;
