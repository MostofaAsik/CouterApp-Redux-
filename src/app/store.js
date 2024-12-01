import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './../features/counters/CounterSlice';

const store = configureStore({
    reducer: {
        counters: counterReducer,
    },
});
export default store