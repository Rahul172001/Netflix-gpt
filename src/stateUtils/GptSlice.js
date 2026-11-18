import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptStatus : false,
        gptMovies:null,
        gptDataResult : null,
        searchBtn : false
    },
    reducers:{
        gptStatus:(state,action)=>{
            state.gptStatus = !state.gptStatus 
        },
        gptResult:(state,action)=>{
            const {movieNames,movieList} = action.payload
            state.gptDataResult = movieNames
            state.gptMovies = movieList
        },
        searchBtnStatus:(state)=>{
            state.searchBtn = true
        }
    }
})

export const {gptStatus,gptResult,searchBtnStatus} = GptSlice.actions
export default GptSlice.reducer