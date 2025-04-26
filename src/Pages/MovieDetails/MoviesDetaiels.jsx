import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesDetails } from '../../Slices/GetMoviesDetailsSlice';
import { useParams } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Box, Button } from '@mui/material';
import { Helmet } from 'react-helmet';

export default function MoviesDetaiels() {
    const {id}= useParams()
    
    
    const dispatch = useDispatch()
const {Movie}= useSelector(state=>state.movieDetails)




useEffect(()=>{
    dispatch(getMoviesDetails(id))

},[])

  return (
    
    <>
    <Helmet>
      <title>{`${Movie.title}`} </title>
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
          <h1 className='text-yellow-300 text-4xl'>{Movie.title}</h1>
          <div className='text-slate-300 flex justify-between items-center my-2'>
            <p className='opacity-30 flex justify-center items-center'>IMDB : {Movie.vote_average}/10 <StarRateIcon className='ml-2 mr-2'/> </p>
            <p className='opacity-30 '>Lang : {Movie.original_language}  </p>
            
          </div>
          <p className='opacity-30 '>Country : {Movie.origin_country}  </p>
          <p className='opacity-30 my-2 '> {Movie.overview}  </p>
         <div className='my-4'>
         <Button variant="contained" sx={{bgcolor:'yellow' ,color:"brown"}} >Watch Now</Button>
         </div>
          </div>
          
      </div>
      <div className=' relative w-[53%] h-full bg-yellow-700 border-l-[70px] rounded-bl-[310px] rounded-tl-[280px]'>
        <img alt={Movie.title} src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} className='w-full h-full  rounded-bl-[280px]  rounded-tl-[300px] pl-3 '/>
        
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
      <img alt={Movie.title} src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} className='w-full h-full   '/>
      </div>
      <div className=' h-full flex justify-center items-center  text-white '>
          <div className='flex-col ml-5 my-4'>
          <h1 className='text-yellow-300 text-4xl'>{Movie.title}</h1>
          <div className='text-slate-300 flex justify-between items-center my-2'>
            <p className='opacity-30 flex justify-center items-center'>IMDB : {Movie.vote_average}/10 <StarRateIcon className='ml-2 mr-2'/> </p>
            <p className='opacity-30 '>Lang : {Movie.original_language}  </p>
            
          </div>
          <p className='opacity-30 '>Country : {Movie.origin_country}  </p>
          <p className='opacity-30 my-2 '> {Movie.overview}  </p>
         <div className='my-4'>
         <Button variant="contained" sx={{bgcolor:'yellow' ,color:"brown"}} >Watch Now</Button>
         </div>
          </div>
          
      </div>
    </div>
    </Box>
   
    </>
  )
}
