import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './../features/counters/CounterSlice';
import postsReducer from './../features/posts/PostsSlice';

const store = configureStore({
    reducer: {
        counters: counterReducer,
        posts: postsReducer
    },
});
export default store