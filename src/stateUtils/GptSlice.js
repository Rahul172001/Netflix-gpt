import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptStatus : false,
        gptMovies:null,
        gptDataResult : null
    },
    reducers:{
        gptStatus:(state,action)=>{
            state.gptStatus = !state.gptStatus 
        },
        gptResult:(state,action)=>{
            const {movieNames,movieList} = action.payload
            state.gptDataResult = movieNames
            state.gptMovies = movieList
        }
    }
})

export const {gptStatus,gptResult} = GptSlice.actions
export default GptSlice.reducer