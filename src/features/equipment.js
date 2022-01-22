import {createSlice} from "@reduxjs/toolkit";

export const equipmentSlice = createSlice({
    name: "equipment",
    initialState: {
        value: []
    },
    reducers: {
        addEquipment: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        removeEquipment: (state, action) => {
            const index = action.payload
            state.value = state.value.filter((x, i) => i !== index)
        },
        swapEquipment: (state, action) => {
            console.log(action.payload)
            // state.value = [...state.value, action.payload]
        }
    }
})

export const {addEquipment, removeEquipment, swapEquipment} = equipmentSlice.actions

export default equipmentSlice.reducer;