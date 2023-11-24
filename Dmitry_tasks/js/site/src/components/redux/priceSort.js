import { createSlice } from '@reduxjs/toolkit';

const priceSort = createSlice({
    name: 'sort',
    initialState: {
        value: 'high',
    },
    reducers: {
        sortPrice: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { sortPrice } = priceSort.actions;
export const selectPrices = (state) => state.sort.value;
export default priceSort.reducer;
