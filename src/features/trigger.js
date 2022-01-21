import  {createSlice} from "@reduxjs/toolkit";

export const triggerSlice = createSlice({
    name: "equipment",
    initialState: {
        value: false
    },
    reducers: {
        toolbarTrigger: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {toolbarTrigger} = triggerSlice.actions

export default triggerSlice.reducer;