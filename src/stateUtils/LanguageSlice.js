import { createSlice } from "@reduxjs/toolkit";

const langData = localStorage.getItem("appLanguage") || ""
const LanguageSlice = createSlice({
    name:"language",
    initialState:{
        lang:langData
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang = action.payload
        }
    }
})

export const {changeLanguage } =LanguageSlice.actions
export default LanguageSlice.reducer