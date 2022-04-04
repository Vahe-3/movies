import { configureStore } from "@reduxjs/toolkit";
import foundMoviesSlice from "./foundMoviesSlice";

const store = configureStore({
    reducer: {
    movies: foundMoviesSlice
    }
});

window.store = store

export default store;