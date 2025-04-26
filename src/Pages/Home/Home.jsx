import React, { useEffect } from 'react'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../Slices/GetMoviesSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import MovieCart from '../../Components/MovieCart/MovieCart';
import {  getTvShows } from '../../Slices/GetTvSlice';
import { getAllTrending } from '../../Slices/Trending';

export default function Home() {
 const  dispatch = useDispatch();


const {Movies}= useSelector(state=>state.movies)
const {TV}=useSelector(state=>state.TVShow)
const {Trend} =useSelector(state=>state.trending)
  
  

console.log(Movies,"my Movies");
console.log(TV,"my TV");







 useEffect(()=>{
  dispatch(getMovies())
  dispatch(getTvShows())
  dispatch(getAllTrending())

 },[])
  return (
   <>
   <Helmet>
    <title>Home</title>
   </Helmet>
  <Swiper
        
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
     
      
      >

   {Movies.map((movie)=>(
      <SwiperSlide key={movie.id}>
          <Link to={`/Movie/${movie.id}`} className='w-[90%] h-[80Vh] bg-black  px-11' >
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-full h-full border-4 border-yellow-400 rounded-2xl p-5 '/>
        </Link>
      </SwiperSlide>


))}
  </Swiper>

  {/* movies */}
    <h1 className='text-yellow-700 text-6xl py-9 px-11 mb-2 ml-4'>MOVIES</h1>
  <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-3 px-9 '>
    {Movies.map((movie)=>(
      <MovieCart key={movie.id} Data={movie} />
    ))}
  </div>
  {/* series */}
    <h1 className='text-yellow-700 text-6xl py-9 px-11 mb-2 ml-4'>TV Shows</h1>
  <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-3 px-9 '>
    {TV.map((show)=>(
      <MovieCart key={show.id} Data={show} tv={true} />
    ))} 
   </div>


 
  
  
   
   </>
  )
}
