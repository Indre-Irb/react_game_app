import {createSlice} from "@reduxjs/toolkit";

export const weaponSlice = createSlice({
    name: "weapon",
    initialState: {
        value: []
    },
    reducers: {
        equippedItem: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {equippedItem} = weaponSlice.actions

export default weaponSlice.reducer;