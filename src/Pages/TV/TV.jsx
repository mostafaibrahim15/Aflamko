import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getTvNowPlaying, getTvShows, getTvTopRated, getTVTrend, getTvUpComing } from '../../Slices/GetTvSlice'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import MovieCart from '../../Components/MovieCart/MovieCart';
import { Helmet } from 'react-helmet';


export default function TV() {
  const dispatch= useDispatch()
  const {TV, TvTrend,TvNowPlaying,TvTopRated,TvUpComing}=useSelector(state=>state.TVShow)

  useEffect(()=>{
    dispatch(getTvShows())
    dispatch(getTVTrend())
    dispatch(getTvNowPlaying())
    dispatch(getTvTopRated())
    dispatch(getTvUpComing())
  },[])
  return (
    <div>

      <Helmet>
        <title>Series</title>
      </Helmet>
      {/* Tv Trend */}

      <h2 className='text-yellow-300 pt-15 mt-9 mb-0 text-3xl mx-5  '>Trending</h2>
        <Swiper
        
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
     
      
      >

   {TvTrend.map((trend)=>(
      <SwiperSlide key={trend.id}>
          <Link to={`/Tv/${trend.id}`} className='w-[60%] h-[80Vh] bg-black m-auto px-2 ' >
        <img src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`} className='w-full h-full border-4 rounded-3xl border-yellow-400'/>
        </Link>
      </SwiperSlide>


))}
        </Swiper>

        {/* now playing */}

        <h2 className='text-yellow-300 pt-15 mt-9 mb-0 text-3xl mx-5  '>Now Playing</h2>
        <Swiper
        
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
     
      
      >

   {TvNowPlaying.map((play)=>(
      <SwiperSlide key={play.id}>
          <Link to={`/Tv/${play.id}`} className='w-[60%] h-[80Vh] bg-black m-auto px-2 ' >
        <img src={`https://image.tmdb.org/t/p/w500${play.poster_path}`} className='w-full h-full border-4 rounded-3xl border-yellow-400'/>
        </Link>
      </SwiperSlide>


))}
        </Swiper>

        {/* Tv top Rated */}

        <h2 className='text-yellow-300 pt-15 mt-9 mb-0 text-3xl mx-5  '>Top rated</h2>
        <Swiper
        
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
     
      
      >

   {TvTopRated.map((rate)=>(
      <SwiperSlide key={rate.id}>
          <Link to={`/Tv/${rate.id}`} className='w-[60%] h-[80Vh] bg-black m-auto px-2 ' >
        <img src={`https://image.tmdb.org/t/p/w500${rate.poster_path}`} className='w-full h-full border-4 rounded-3xl border-yellow-400'/>
        </Link>
      </SwiperSlide>


))}
        </Swiper>

        {/* Coming Soon */}
        
        <h2 className='text-yellow-300 pt-15 mt-9 mb-0 text-3xl mx-5  '>Coming Soon</h2>
        <Swiper
        
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
     
      
      >

   {TvUpComing.map((comes)=>(
      <SwiperSlide key={comes.id}>
          <Link to={`/Tv/${comes.id}`} className='w-[60%] h-[80Vh] bg-black m-auto px-2 ' >
        <img src={`https://image.tmdb.org/t/p/w500${comes.poster_path}`} className='w-full h-full border-4 rounded-3xl border-yellow-400'/>
        </Link>
      </SwiperSlide>


))}
        </Swiper>

        {/* all series */}

        <h2 className='text-yellow-300 pt-15 mt-9 mb-15 text-3xl mx-5  '>All Series</h2>
        <div className='grid grid-cols-1 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4  gap-3 px-6'>
        {TV.map((tv)=>(
           <MovieCart key={tv.id} Data={tv} tv={true} />
        ))}
        </div>
        
      </div>
    
  )
}
