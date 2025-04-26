
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import Movies from './Pages/Movies/Movies'
import TV from './Pages/TV/TV'
import Signin from './Pages/SignIn/Signin'
import Register from './Pages/Regiester/Register'
import Contact from './Pages/Contact/Contact'
import MoviesDetaiels from './Pages/MovieDetails/MoviesDetaiels'
import WatchList from './Pages/WatchList/WatchList'
import TvDetails from './Pages/TvDetails/TvDetails'

function App() {
 
const router= createBrowserRouter([
  {path:"/",
    element:<Layout/>  ,
    children:[
      {path:"/",element:<Home/>},
      {path:"/Movies",element:<Movies/>},
      {path:"/TV",element:<TV/>},
      {path:"/Contact",element:<Contact/>},
      {path:"/signin",element:<Signin/>},
      {path:"/register",element:<Register/>},
      {path:"/Movie/:id",element:<MoviesDetaiels/>},
      {path:"/Tv/:id",element:<TvDetails/>},
      {path:"/WatchList",element:<WatchList/>},
      
    ]
  }
])
  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
