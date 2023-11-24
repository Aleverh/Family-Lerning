import { createSlice } from '@reduxjs/toolkit';

const totalPrice = createSlice({
    name: 'price',
    initialState: {
        value: 0,
    },
    reducers: {
        addSum: (state, action) => {
            state.value += action.payload;
        },
        deleteSum: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addSum, deleteSum } = totalPrice.actions;
export const totalSum = (state) => state.price.value;
export default totalPrice.reducer;
