import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"

const appRouter = configureStore({
    reducer:{
        user : userReducer
    }
})

export default appRouter