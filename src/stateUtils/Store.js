import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import movieReducer from "./MovieSlice"

 export const Store = configureStore({
    reducer:{
        user : userReducer,
        movie : movieReducer
    }
})
