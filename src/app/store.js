import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todos/todoSlice';

export const store = configureStore({
    reducer: todoReducer // register all the reducers into store reducer
});
