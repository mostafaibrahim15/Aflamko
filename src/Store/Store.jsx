import { configureStore } from "@reduxjs/toolkit";
import moviesReducer  from "../Slices/GetMoviesSlice";
import MoviesDetailsReducer  from "../Slices/GetMoviesDetailsSlice";
import TVReducer from "../Slices/GetTvSlice"
import trendingReducer from "../Slices/Trending"
import MovieTrendReducer from "../Slices/GetMovieTrendSlice"
import MovieListReducer from "../Slices/GetMovieList"



export const Store= configureStore({
   reducer:{
    movies:moviesReducer,
    movieDetails:MoviesDetailsReducer,
    TVShow:TVReducer,
    trending:trendingReducer,
    MovieTrend:MovieTrendReducer,
    MovieList:MovieListReducer
   }
});