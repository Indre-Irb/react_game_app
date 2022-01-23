import  {createSlice} from "@reduxjs/toolkit";

export const triggerSlice = createSlice({
    name: "trigger",
    initialState: {
        value: false
    },
    reducers: {
        toolbarTrigger: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {toolbarTrigger, generateEnemyTrigger} = triggerSlice.actions

export default triggerSlice.reducer;