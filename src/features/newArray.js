import {createSlice} from "@reduxjs/toolkit";

export const newArraySlice = createSlice({
    name: "newArray",
    initialState: {
        value: {

        }
    },
    reducers: {
        updatedWeapons: (state, {payload}) => {

        }
    }
})

export const {shopArray} = newArraySlice.actions

export default newArraySlice.reducer;