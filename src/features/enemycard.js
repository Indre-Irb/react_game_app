import {createSlice} from "@reduxjs/toolkit";

export const enemySlice = createSlice({
    name: "enemy",
    initialState: {
        value: []
    },
    reducers: {
        generatedEnemy: (state, action) => {
            state.value = action.payload
        },
        enemyStatusUpdate: (state, action) => {
            console.log(action.payload)
            state.value.health -= action.payload
        }


    }
})

export const {generatedEnemy, enemyStatusUpdate} = enemySlice.actions

export default enemySlice.reducer;