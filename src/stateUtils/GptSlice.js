import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        gpt : false
    },
    reducers:{
        gptStatus:(state,action)=>{
            state = true
        }
    }
})

export const {gptStatus} = GptSlice.actions
export default GptSlice.reducer