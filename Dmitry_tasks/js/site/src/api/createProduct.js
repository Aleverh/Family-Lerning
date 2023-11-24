import { doc, getDoc, setDoc } from 'firebase/firestore';
import moment from 'moment';
import { db } from '../firebase/index';
import upload from './upload';

const createProduct = async (name, category, description, images, price) => {
    const today = moment();

    moment.lang('en');
    const imagesUrl = new Promise((res) => {
        res(upload(images));
    });
    const id = name + category + Math.random();
    imagesUrl.then((value) => {
        setDoc(doc(db, 'products', id), {
            status: 'Activated',
            id,
            price,
            name,
            category,
            description,
            imagesUrl: value,
            date: today.format('DD MMM YYYY'),
        });
        getDoc(doc(db, 'category', category)).then((data) => {
            if (data.data()) {
                return null;
            } setDoc(doc(db, 'category', category), {
                category,
            });
        });
    });
};
export default createProduct;
