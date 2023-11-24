import { createSlice } from '@reduxjs/toolkit';

const activeCategory = createSlice({
    name: 'category',
    initialState: {
        value: '',
    },
    reducers: {
        changeCategory: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeCategory } = activeCategory.actions;
export const selectCategory = (state) => state.category.value;
export default activeCategory.reducer;
