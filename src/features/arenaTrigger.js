import  {createSlice} from "@reduxjs/toolkit";

export const arenaTriggerSlice = createSlice({
    name: "arenaTrigger",
    initialState: {
        value: false
    },
    reducers: {
        generateEnemyTrigger: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {generateEnemyTrigger} = arenaTriggerSlice.actions

export default arenaTriggerSlice.reducer;