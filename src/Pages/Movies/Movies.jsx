import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovieTrend } from '../../Slices/GetMovieTrendSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import { Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { getMovies, getNowPlayingMovies, getTopRatedMovies, getUpComingMovies } from '../../Slices/GetMoviesSlice';
import MovieCart from '../../Components/MovieCart/MovieCart';
import { Helmet } from 'react-helmet';


export default function Movies() {

  const dispatch= useDispatch()
  const {movieTrend}=useSelector(state=>state.MovieTrend)
  const {Movies,NowPlaying,TopRated,UpComing}= useSelector(state=>state.movies)


  console.log("my Movies is ",Movies);
  

  useEffect(()=>{
    dispatch(getAllMovieTrend())
    dispatch(getMovies())
    dispatch(getNowPlayingMovies())
    dispatch(getTopRatedMovies())
    dispatch(getUpComingMovies())
  },[])
  return (
    
    <>
    <Helmet>
      <title>Movies</title>
    </Helmet>
    <div className='py-20 px-11 relative'>
  



      {/* popular movies */}
      <h2 className='text-yellow-300 pt-3 mt-2 mb-0 text-2xl '>Movies Popular</h2>
        <Swiper
        
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
     
      
      >

   {movieTrend
   .map((movieTrend)=>(
      <SwiperSlide key={movieTrend.id}>
          <Link to={`/Movie/${movieTrend.id}`} className='w-[60%] h-[80Vh] bg-black m-auto px-2 ' >
        <img src={`https://image.tmdb.org/t/p/w500${movieTrend.poster_path}`} className='w-full h-full border-4 rounded-3xl border-yellow-400'/>
        </Link>
      </SwiperSlide>


))}
        </Swiper>


        {/* now playing */}
      <h2 className='text-yellow-300 pt-3 mt-2 mb-0 text-2xl '>Now Playing</h2>
        <Swiper
        
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
     
      
      >

{NowPlaying.map((Play)=>(
      <SwiperSlide key={Play.id}>
          <Link to={`/Movie/${Play.id}`} className='w-[60%] h-[80Vh] bg-black m-auto px-2 ' >
        <img src={`https://image.tmdb.org/t/p/w500${Play.poster_path}`} className='w-full h-full border-4 rounded-3xl border-yellow-400'/>
        </Link>
      </SwiperSlide>


))}
        </Swiper>


        {/* Top Rated */}
      <h2 className='text-yellow-300 pt-3 mt-2 mb-0 text-2xl '>Top Rated</h2>
        <Swiper
        
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
     
      
      >

{TopRated.map((rate)=>(
      <SwiperSlide key={rate.id}>
          <Link to={`/Movie/${rate.id}`} className='w-[60%] h-[80Vh] bg-black m-auto px-2 ' >
        <img src={`https://image.tmdb.org/t/p/w500${rate.poster_path}`} className='w-full h-full border-4 rounded-3xl border-yellow-400'/>
        </Link>
      </SwiperSlide>


))}
        </Swiper>

   {/* Up coming */}
   <h2 className='text-yellow-300 pt-3 mt-2 mb-0 text-2xl '>Up Coming</h2>
        <Swiper
        
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
     
      
      >

{UpComing.map((upcomes)=>(
      <SwiperSlide key={upcomes.id}>
          <Link to={`/Movie/${upcomes.id}`} className='w-[60%] h-[80Vh] bg-black m-auto px-2 ' >
        <img src={`https://image.tmdb.org/t/p/w500${upcomes.poster_path}`} className='w-full h-full border-4 rounded-3xl border-yellow-400'/>
        </Link>
      </SwiperSlide>


))}
        </Swiper>


  {/* all movies */}
  <h2 className='text-yellow-300 pt-3 mt-2 mb-7 text-2xl '>All Movies</h2>
     <div className='grid grid-cols-1 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4  gap-3 px-6'>
         {Movies.map((movie)=>(
           <MovieCart key={movie.id} Data={movie} />
         ))}
       </div>

     
    </div>
    
    </>
  )
}
