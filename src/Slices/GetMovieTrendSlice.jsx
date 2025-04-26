import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY="cbe543df4f0694813558fd8e4a0fc172";
const BASE_URL="https://api.themoviedb.org/3";

export const getAllMovieTrend = createAsyncThunk(
    "trendingMovie/fetchTrendingMovie",async(_,thunkAPI)=>{
        try {
            const response= await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
            console.log(response);
            return response.data.results
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
        }
    }
)

export const movieTrendSlice= createSlice({
    name:"MovieTrend",
    initialState:{
        movieTrend:[],
        status:"idle",
        error:null
    },
    extraReducers:builder =>
        builder.addCase(getAllMovieTrend.pending,(state)=>{
            state.status="pending"
            
        }).addCase(getAllMovieTrend.fulfilled,(state,action)=>{
            state.movieTrend=action.payload
            state.status="done"
        }).addCase(getAllMovieTrend.rejected,(state,action)=>{
            state.error=action.payload
        })
})

export default movieTrendSlice.reducer