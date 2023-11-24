import { createSlice } from '@reduxjs/toolkit';

const changeQuantity = createSlice({
    name: 'quantity',
    initialState: {
        value: 1,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value - 1 > 0) {
                state.value -= 1;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { decrement, increment } = changeQuantity.actions;
export const selectCount = (state) => state.quantity.value;
export default changeQuantity.reducer;
