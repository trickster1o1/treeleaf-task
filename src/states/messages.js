import { createSlice } from "@reduxjs/toolkit";
let initialStateValue = [];
const msgSlice = createSlice({
    name: 'messages',
    initialState: {value: initialStateValue},
    reducers: {
        getMsg: (state,action) => {
            state.value = action.payload;
        }
    },
});

export const {getMsg} = msgSlice.actions;
export default msgSlice.reducer;
