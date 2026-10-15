import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import movieReducer from "./MovieSlice"
import gptReducer from "./GptSlice";

 export const Store = configureStore({
    reducer:{
        user : userReducer,
        movie : movieReducer,
        gpt : gptReducer
    }
})
