import {createSlice} from "@reduxjs/toolkit";

export const newArraySlice = createSlice({
    name: "newArray",
    initialState: {
        value: [{}]
    },
    reducers: {
        enemyWeapons: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {enemyWeapons} = newArraySlice.actions

export default newArraySlice.reducer;