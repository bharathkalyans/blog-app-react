import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../features/blogsSlice'

export const store = configureStore({
    reducer: {
        blogs: blogReducer
    }
})