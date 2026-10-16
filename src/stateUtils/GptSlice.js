import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptStatus : false
    },
    reducers:{
        gptStatus:(state,action)=>{
            state.gptStatus = !state.gptStatus 
        }
    }
})

export const {gptStatus} = GptSlice.actions
export default GptSlice.reducer