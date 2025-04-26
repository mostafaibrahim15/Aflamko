import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Box, Button } from '@mui/material';
import { getTVDetails } from '../../Slices/GetTvSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Helmet } from 'react-helmet';

export default function MoviesDetaiels() {
    const {id}= useParams()
    const dispatch = useDispatch()

const {TvDetails}=useSelector(state=>state.TVShow)


const Seasons= TvDetails.seasons
console.log(Seasons);

useEffect(()=>{
 
    dispatch(getTVDetails(id))
},[])

  return (
    
    <>
    <Helmet>
      <title>{`${TvDetails.title}`}</title>
    </Helmet>
    <Box
    sx={{
      display:{
        xs:"none",
        md:"block"
      }
    }}
    >
    <div className='w-full h-[100vh]  flex justify-between items-center'>
      <div className='w-[43%] h-full flex justify-center items-center  text-white ml-4'>
          <div className='flex-col'>
          <h1 className='text-yellow-300 text-4xl'>{TvDetails.name}</h1>
          <div className='text-slate-300 flex justify-between items-center my-2'>
            <p className='opacity-30 flex justify-center items-center'>IMDB : {TvDetails.vote_average}/10 <StarRateIcon className='ml-2 mr-2'/> </p>
            <p className='opacity-30 '>Type : {TvDetails.type}  </p>
            <p className='opacity-30 '>Lang : {TvDetails.original_language}  </p>
            
          </div>
          <p className='opacity-30 '>Country : {TvDetails.origin_country}  </p>
          <p className='opacity-30 my-2 '> {TvDetails.overview}  </p>
         <div className='my-4'>
         <Button variant="contained" sx={{bgcolor:'yellow' ,color:"brown"}} >Watch Now</Button>
         </div>
          </div>
          
      </div>
      <div className=' relative w-[53%] h-full bg-yellow-700 border-l-[70px] rounded-bl-[310px] rounded-tl-[280px]'>
        <img alt={TvDetails.title} src={`https://image.tmdb.org/t/p/w500${TvDetails.poster_path}`} className='w-full h-full  rounded-bl-[280px]  rounded-tl-[300px] pl-3 '/>
        
      </div>
    </div>
    </Box>
    <Box
    sx={{
      display:{
        xs:"block",
        md:"none"
      }
    }}
    >
    <div className='flex-col w-[95%]'>
      <div >
      <img alt={TvDetails.title} src={`https://image.tmdb.org/t/p/w500${TvDetails.poster_path}`} className='w-full h-full   '/>
      </div>
      <div className=' h-full flex justify-center items-center  text-white '>
          <div className='flex-col ml-5 my-4'>
          <h1 className='text-yellow-300 text-4xl'>{TvDetails.name}</h1>
          <div className='text-slate-300 flex justify-between items-center my-2'>
            <p className='opacity-30 flex justify-center items-center'>IMDB : {TvDetails.vote_average}/10 <StarRateIcon className='ml-2 mr-2'/> </p>
            <p className='opacity-30 '>Type : {TvDetails.type}  </p>
            <p className='opacity-30 '>Lang : {TvDetails.original_language}  </p>
            
          </div>
          <p className='opacity-30 '>Country : {TvDetails.origin_country}  </p>
          <p className='opacity-30 my-2 '> {TvDetails.overview}  </p>
         <div className='my-4'>
         <Button variant="contained" sx={{bgcolor:'yellow' ,color:"brown"}} >Watch Now</Button>
         </div>
          </div>
          
      </div>
    </div>
    </Box>
    <div>
    <h2 className='text-yellow-300 pt-15 mt-9 mb-15 text-3xl mx-5  '>Seasons</h2>
    <Swiper
        
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
     
      
      >

   {Seasons?.map((season)=>(
      <SwiperSlide key={season.id}>
          <Link to={`/Movie/${season.id}`} className='w-[90%] h-[80Vh] bg-black  px-11' >
        <img src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} className='w-full h-full border-4 border-yellow-400 rounded-2xl p-5 '/>
        </Link>
      </SwiperSlide>


))}
  </Swiper>
    </div>
   
    </>
  )
}
