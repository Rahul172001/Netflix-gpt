import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import movieReducer from "./MovieSlice"
import gptReducer from "./GptSlice";
import languageReducer from "./LanguageSlice"

 export const Store = configureStore({
    reducer:{
        user : userReducer,
        movie : movieReducer,
        gpt : gptReducer,
        language: languageReducer
    }
})
