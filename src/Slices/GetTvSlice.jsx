import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY="cbe543df4f0694813558fd8e4a0fc172";
const BASE_URL="https://api.themoviedb.org/3/discover/tv";
// get all TV shows
export const getTvShows= createAsyncThunk(
    "tvshows/fetchTvShow", async(_,thunkAPI)=>{
        try {
            const response= await axios.get(`${BASE_URL}?api_key=${API_KEY}`)
            console.log(response);
            
            return response.data.results
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
        }
    }
)

// get tv details
export const getTVDetails= createAsyncThunk(
    "TVDetails/FetchTVDetails",async(TVId ,thunkAPI)=>{
        try {
            const Response= await axios.get(`https://api.themoviedb.org/3/tv/${TVId}?api_key=${API_KEY}`)
                 return Response.data;
                
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
        }
    }
)

// get tv trending

export const getTVTrend= createAsyncThunk(
    "TVTrend/FetchTVTrend",async(_,thunkAPI)=>{
        try {
            const Response= await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`)
                 return Response.data.results;
                
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
        }
    }
)

//  get tv now playing

export const getTvNowPlaying= createAsyncThunk(
    "TVNowPlaying/FetchTVNowPlaying",async(_,thunkAPI)=>{
        try {
            const Response= await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}`)
                 return Response.data.results;
                
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
        }
    }
)

// get tv top rated
export const getTvTopRated= createAsyncThunk(
    "TVNowTopRated/FetchTVTopRated",async(_,thunkAPI)=>{
        try {
            const Response= await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)
                 return Response.data.results;
                
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
        }
    }
)

// get Tv upComing
export const getTvUpComing= createAsyncThunk(
    "TVUpComing/FetchTVUpComing",async(_,thunkAPI)=>{
        try {
            const Response= await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)
                 return Response.data.results;
                
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
        }
    }
)


export const TvShowSlice = createSlice({
    name:"TV",
    initialState:{
        TV:[],
        TvDetails:[],
        TvTrend:[],
        TvNowPlaying:[],
        TvTopRated:[],
        TvUpComing:[],
        status:'idle',
        error:null
    },
    extraReducers:builder =>
        builder.addCase(getTvShows.pending,(state)=>{
            state.status="pending"
            
        }).addCase(getTvShows.fulfilled,(state,action)=>{

            state.TV=action.payload

        }).addCase(getTvShows.rejected,(state,action)=>{

            state.error=action.payload

        }).addCase(getTVDetails.pending,(state)=>{

            console.log(state); 

        }).addCase(getTVDetails.fulfilled,(state,action)=>{

            state.TvDetails=action.payload

        }).addCase(getTVDetails.rejected,(state,action)=>{

            state.TvDetails=action.payload

        }).addCase(getTVTrend.pending,(state)=>{

            console.log(state);  

        }).addCase(getTVTrend.fulfilled,(state,action)=>{

            state.TvTrend=action.payload

        }).addCase(getTVTrend.rejected,(state,action)=>{

            state.error=action.payload

        }).addCase(getTvNowPlaying.pending,(state)=>{

            console.log(state);  

        }).addCase(getTvNowPlaying.fulfilled,(state,action)=>{

            state.TvNowPlaying=action.payload

        }).addCase(getTvNowPlaying.rejected,(state,action)=>{

            state.error=action.payload

        }).addCase(getTvTopRated.pending,(state)=>{

            console.log(state);
              
        }).addCase(getTvTopRated.fulfilled,(state,action)=>{

            state.TvTopRated=action.payload
            
        }).addCase(getTvTopRated.rejected,(state,action)=>{

            state.error=action.payload

        }).addCase(getTvUpComing.pending,(state)=>{

            console.log(state); 

        }).addCase(getTvUpComing.fulfilled,(state,action)=>{

            state.TvUpComing=action.payload

        }).addCase(getTvUpComing.rejected,(state,action)=>{

            state.error=action.payload

        })
})

export default  TvShowSlice.reducer