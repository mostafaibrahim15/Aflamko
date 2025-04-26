import React, { useState } from 'react'

// mui import
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Divider, Drawer, List, ListItem } from '@mui/material';




export default function Navbar() {
    const [open,setOpen] =useState(false)
  const [display,setDisplay]= useState('none')
  
  return (
  <>
 <Box sx={{ flexGrow: 1  }}>
      <AppBar position="fixed" sx={{bgcolor:"#000" ,top:0, left:0 ,borderBottom:"1px solid yellow",mb:4}} >
        <Toolbar sx={{bgcolor:"black",mx:{
          xs:1,
          sm:5,
          md:6,
         
        },
         
        
        
        }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,
                display:{
                    xs:"block",
                    sm:"none"
                },
               
                
                
            }}
          onClick={()=>{
            setOpen(!open)
            setDisplay("block")
          }}
         
          >
            <MenuIcon sx={{color:"#f57f17"}}  />
          </IconButton>
         <Box sx={{flexGrow:1, display:"flex", justifyContent:"start", alignItems:"center"}}
         
         
         
         >
         <Typography variant="h6" component="div" sx={{mr:3 ,color:"#f9a825"}} className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl' >
         <Link to={"/"} className='text-decoration-none'>AFLAMKO</Link>
          </Typography>

            {/* nav link at large screens */}
          <Box sx={{
            display:{
                xs:"none",
                sm:"flex"
            },
           mx:6
          }}>
            
          
            <Button >
            <Link to={"/Movies"} className='text-decoration-none text-yellow-400'>Movies</Link>
          </Button>
            <Button color="#fbc02d">
            <Link to={"/TV"} className='text-decoration-none  text-yellow-400'>TV series</Link>
          </Button>
            <Button color="#fbc02d">
            <Link to={"/WatchList"} className='text-decoration-none text-yellow-400'>Favorites</Link>
          </Button>
            <Button color="#fbc02d">
            <Link to={"/Contact"} className='text-decoration-none text-yellow-400'>Contact</Link>
          </Button>
           
          </Box>
           
           

         </Box>
          <Button color="#fbc02d">
            <Link to={"/signin"} className='text-decoration-none text-yellow-700 text-sm  md:text-md'>Login</Link>
          </Button>
          <Button color="#fbc02d">
          <Link to={"/register"} className='text-decoration-none text-yellow-700 text-md '>Register</Link>
            </Button>
          
        </Toolbar>
      </AppBar>
 {/* nav at small screens */}
      {open?<>
      
        <Box sx={{position:"absolute",
        top:{
          xs:"49px",
          
        },
        py:2 , 
        width:"30%" , 
        border:"1px solid #f9a825" ,
        textAlign:"center",
        borderRadius:"15px",
        zIndex:"152365264",
        bgcolor:"Black",
        display:`${display}`
      }}
    
      >

         <Button  onClick={()=>{
            
            setDisplay("none")
          }}>
            <Link to={"/Movies"} className='text-decoration-none text-yellow-400 hover:text-yellow-200'>Movies</Link>
          </Button>
          <Divider sx={{border:"1px solid #f9a825 " ,opacity:".1"}}/>
            <Button color="#fbc02d" onClick={()=>{
            
            setDisplay("none")
          }}>
            <Link to={"/TV"} className='text-decoration-none  text-yellow-400 hover:text-yellow-200'>TV series</Link>
          </Button>
          <Divider sx={{border:"1px solid #f9a825 " ,opacity:".1"}}/>
            <Button color="#fbc02d" onClick={()=>{
            
            setDisplay("none")
          }}>
            <Link to={"/WatchList"} className='text-decoration-none text-yellow-400 hover:text-yellow-200'>Favorites</Link>
          </Button>
          <Divider sx={{border:"1px solid #f9a825 " ,opacity:".1"}}/>
            <Button color="#fbc02d" onClick={()=>{
            
            setDisplay("none")
          }}>
            <Link to={"/Contact"} className='text-decoration-none text-yellow-400 hover:text-yellow-200'>Contact</Link>
          </Button>
  
        </Box>
      
      
      </>:""}
    </Box>

  </>
  )
}
