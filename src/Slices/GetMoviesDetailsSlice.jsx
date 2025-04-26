import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY="cbe543df4f0694813558fd8e4a0fc172";
const BASE_URL="https://api.themoviedb.org/3";


export const getMoviesDetails= createAsyncThunk(
    "MovieDetails/FetchMovies",async(movieId ,thunkAPI)=>{
        try {
            const Response= await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
                 return Response.data;
                
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
        }
    }
)

export const movieDetailsSlice= createSlice({
    name:"MoviesDetails",
    initialState:{
        Movie:[],
        status:"idle",
        error:null
    },
    extraReducers:builder =>
        builder.addCase(getMoviesDetails.pending,(state,action)=>{
            console.log(state,action);
            
        }).addCase(getMoviesDetails.fulfilled,(state,action)=>{
            state.Movie = action.payload
        }).addCase(getMoviesDetails.rejected,(state,action)=>{
            state.error = action.payload
        })
})

export default movieDetailsSlice.reducer