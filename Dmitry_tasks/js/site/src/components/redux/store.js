import { configureStore } from '@reduxjs/toolkit';
import changeQuantity from './counterSlice';
import activeCategory from './activeCategory';
import priceSort from './priceSort';
import totalPrice from './totalPrice';
import userInfoType from './userInfo';

const store = configureStore({
    reducer: {
        type: userInfoType,
        price: totalPrice,
        category: activeCategory,
        quantity: changeQuantity,
        sort: priceSort,
    },
});
export default store;
