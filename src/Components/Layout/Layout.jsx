
import { Outlet } from 'react-router-dom'
import Navbar from '../Nav/Navbar'


export default function Layout() {
  
  return (
    <div className='bg-black h-[100vh]'>
        <Navbar  />
        
      <div className='bg-black' >
      <Outlet></Outlet>
      </div>
    </div>
  )
}
