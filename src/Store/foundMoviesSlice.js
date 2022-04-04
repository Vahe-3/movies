import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findMovies } from './../Api/api';

export const getMoviesThunk = createAsyncThunk(
    "foundMovies/foundMoviesThunk",

    async function ({searchText,contentType="all"}){
        
        
        const response = await findMovies(searchText,contentType);

        return response.data.Search;
    }
)

const foundMoviesSlice = createSlice({
    name: "foundMovies",

    initialState:{
        isLoading: false,
        movies: [],
        
    },

    extraReducers:{
        [getMoviesThunk.pending]: (state, action) => {
            state.isLoading = true
        },

        [getMoviesThunk.fulfilled]: (state, action) => {
            state.isLoading = false
            state.movies = action.payload
        },

        [getMoviesThunk.rejected]: (state, action) => {
                console.error(action);
        },
        



    }
})

export default foundMoviesSlice.reducer;
