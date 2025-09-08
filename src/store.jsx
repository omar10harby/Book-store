import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/Auth/AuthSlice'
const store =configureStore({
    auth:authReducer
})