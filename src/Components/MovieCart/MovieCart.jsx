
import { Link, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateIcon from '@mui/icons-material/StarRate';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



export default function MovieCart({Data,tv}) {

const navigator= useNavigate()
  
  
  return (
    <>
      <div className='border-4 border-yellow-300 rounded-2xl' onClick={()=>{
       {tv?   navigator(`/Tv/${Data.id}`):   navigator(`/Movie/${Data.id}`)}
      }}>
        <div className='w-full h-[80%]'>
        <img alt='' src={`https://image.tmdb.org/t/p/w500${Data.poster_path}`} className='w-full h-full rounded-2xl p-2'/>
        </div>
        <div className='text-yellow-800'>
         {Data.title?<>
          <Typography variant="body1" sx={{ml:2,fontWeight:"bold",mb:0}}>
            {Data.title}
          </Typography>
         </>:<>
         <Typography variant="body1" sx={{ml:2,fontWeight:"bold",mb:0}}>
            {Data.name}
          </Typography>
         </>}
          <Typography variant="body1" sx={{ml:2,mt:0,fontSize:".4rem"}}>
            {Data.release_date}
          </Typography>
        </div>
        <div className='w-full my-2 flex justify-between items-center px-2'>
          <div>
            <IconButton onClick={()=>{
              navigator(`WatchList/${Data.id}`)
            }}>
              <FavoriteIcon className='text-yellow-400 hover:text-yellow-800'/>
            </IconButton>
            {Data.vote_average >5?<>
              <StarRateIcon className='text-[.4rem] text-yellow-300 hover:text-yellow-800'/>
              <StarRateIcon className='text-[.4rem] text-yellow-300 hover:text-yellow-800'/>
              <StarRateIcon className='text-[.4rem] text-yellow-300 hover:text-yellow-800'/>
              <StarRateIcon className='text-[.4rem] text-yellow-300 hover:text-yellow-800'/>
            </>:<>
            <StarRateIcon className='text-[.4rem] text-yellow-300 hover:text-yellow-800'/>
            <StarRateIcon className='text-[.4rem] text-yellow-300 hover:text-yellow-800'/>
            </>}
          </div>
          <div className='flex justify-center items-center hover:cursor-pointer' onClick={()=>{
        navigator(`/Movie/${Data.id}`)
      }}>
            <Typography variant="body1"  className='text-yellow-500 hover:text-yellow-800'>
              Watch
            </Typography>
              <ArrowRightAltIcon className='text-yellow-300 hover:text-yellow-800'/>
          </div>
        </div>
      </div>
  
    
    </>
  )
}