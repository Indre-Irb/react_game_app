import  {createSlice} from "@reduxjs/toolkit";

export const collectTriggerSlice = createSlice({
    name: "collectTrigger",
    initialState: {
        value: false
    },
    reducers: {
        generateCollectTrigger: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {generateCollectTrigger} = collectTriggerSlice.actions

export default collectTriggerSlice.reducer;