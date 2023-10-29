import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/POSTS/PostSlice';
import usersReducer from '../features/USERS/UserSlice';




export const store = configureStore ({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})