import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY="cbe543df4f0694813558fd8e4a0fc172";
const BASE_URL="https://api.themoviedb.org/3";

export const  getAllTrending= createAsyncThunk(
    "trending/fetchTrending",async(_,thunkAPI)=>{
        try {
            const response= await axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`)
            return response.data.results
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
        }

    })






export const trendingSlice= createSlice({
    name:"Trending",
    initialState:{
        Trend:[],
        status:"idle",
        error:null
    },
    extraReducers:builder =>
        builder.addCase(getAllTrending.pending,(state)=>{
            state.status="pending"
            
        }).addCase(getAllTrending.fulfilled,(state,action)=>{
            state.Trend=action.payload
            state.status="done"
        }).addCase(getAllTrending.rejected,(state,action)=>{
            state.error=action.payload
        })


}

)

export default trendingSlice.reducer