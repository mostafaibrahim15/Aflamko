import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const API_KEY="cbe543df4f0694813558fd8e4a0fc172";
const BASE_URL="https://api.themoviedb.org/3";

export const getMoviesList=createAsyncThunk(
    "MovieList/fetchMoviesList",async(_,thunkAPI)=>{
        try {
            const response= await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
            console.log(response);

            return response.data.genres;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
        }
    }
)







export const moviesListSlice= createSlice({
    name:"MovieList",
    initialState:{
        status:"idle",
        List:[],
        error:null
    },
    extraReducers:builder =>{
        builder.addCase(getMoviesList.pending,(state)=>{
            state.status="pending"
        }).addCase(getMoviesList.fulfilled,(state,action)=>{
            state.List=action.payload
            state.status="done"
        }).addCase(getMoviesList.rejected,(state,action)=>{
            state.error=action.payload
        })
    }
})

export default moviesListSlice.reducer