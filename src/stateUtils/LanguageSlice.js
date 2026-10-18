import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
    name:"language",
    initialState:{
        lang:"English"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang = action.payload
        }
    }
})

export const {changeLanguage } =LanguageSlice.actions
export default LanguageSlice.reducer