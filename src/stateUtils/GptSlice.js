import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptStatus : false,
        gptResult : null
    },
    reducers:{
        gptStatus:(state,action)=>{
            state.gptStatus = !state.gptStatus 
        },
        gptResult:(state,action)=>{
            state.gptResult = action.payload
        }
    }
})

export const {gptStatus,gptResult} = GptSlice.actions
export default GptSlice.reducer