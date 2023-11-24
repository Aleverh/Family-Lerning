import { createSlice } from '@reduxjs/toolkit';

const userInfoType = createSlice({
    name: 'type',
    initialState: {
        value: 'read',
    },
    reducers: {
        changeType: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeType } = userInfoType.actions;
export const selectCount = (state) => state.type.value;
export default userInfoType.reducer;
