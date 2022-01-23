import {createSlice} from "@reduxjs/toolkit";

export const newArraySlice = createSlice({
    name: "newArray",
    initialState: {
        value: []
    },
    reducers: {
        enemyWeapons: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        removeEnemyEquipment: (state, action) => {
            const index = action.payload
            state.value = state.value.filter((x, i) => i !== index)
        },
        removeEnemyAllItems: (state,action) => {
            state.value = []
        }
    }
})

export const {enemyWeapons, removeEnemyEquipment, removeEnemyAllItems} = newArraySlice.actions

export default newArraySlice.reducer;