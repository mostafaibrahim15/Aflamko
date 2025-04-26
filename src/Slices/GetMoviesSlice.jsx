import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ApiKey="cbe543df4f0694813558fd8e4a0fc172";
const BASE_URL="https://api.themoviedb.org/3";

// get All Movies

 export const getMovies= createAsyncThunk(
    "Movies/fetchMovies", async(_,thunkAPI)=>{
        try {
            const response= await axios.get(`${BASE_URL}/movie/popular?api_key=${ApiKey}`);
            return response.data.results
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
            
        }
    }
)

// get playing movies
 export const getNowPlayingMovies= createAsyncThunk(
    "Movies/fetchNowPlayingMovies", async(_,thunkAPI)=>{
        try {
            const response= await axios.get(`${BASE_URL}/movie/now_playing?api_key=${ApiKey}`);
            return response.data.results
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
            
        }
    }
)

// get top Rated movies

 export const getTopRatedMovies= createAsyncThunk(
    "Movies/fetchTopRatedMovie", async(_,thunkAPI)=>{
        try {
            const response= await axios.get(`${BASE_URL}/movie/top_rated?api_key=${ApiKey}`);
            return response.data.results
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
            
        }
    }
)

// get upcoming movies

 export const getUpComingMovies= createAsyncThunk(
    "Movies/fetchUpComingMovies", async(_,thunkAPI)=>{
        try {
            const response= await axios.get(`${BASE_URL}/movie/upcoming?api_key=${ApiKey}`);
            return response.data.results
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed')
            
        }
    }
)




export const  movieSlice= createSlice({
    name:"Movies",
    initialState:{
        Movies:[],
        NowPlaying:[],
        TopRated:[],
        UpComing:[],
        status:'idle',
        error:null
    },
 
    extraReducers(builder){
        builder.addCase(getMovies.pending,(state)=>{
        console.log(state);
        
        }).addCase(getMovies.fulfilled,(state,action)=>{              
            state.Movies=action.payload
        }).addCase(getMovies.rejected,(state,action) =>{
            
            state.error=action.payload
            console.log( state,action);
        }).addCase(getNowPlayingMovies.pending,(state)=>{
           console.log(state);
           
          }).addCase(getNowPlayingMovies.fulfilled,(state,action)=>{          
              state.NowPlaying=action.payload
          }).addCase(getNowPlayingMovies.rejected,(state,action) =>{
             
              state.error=action.payload
              
        }).addCase(getTopRatedMovies.pending,(state)=>{
             console.log(state);
        }).addCase(getTopRatedMovies.fulfilled,(state,action)=>{
            state.TopRated=action.payload
        }).addCase(getTopRatedMovies.rejected,(state,action)=>{
            state.error=action.payload
        }).addCase(getUpComingMovies.pending,(state)=>{
            console.log(state);
            
        }).addCase(getUpComingMovies.fulfilled,(state,action)=>{
            state.UpComing=action.payload
        }).addCase(getUpComingMovies.rejected,(state,action)=>{
            state.error=action.payload
        })


    }})

export default movieSlice.reducer