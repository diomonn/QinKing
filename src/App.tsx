import { Outlet } from 'react-router-dom';
import './index.css'
import Nav from './page/nav/index';
import { useState } from 'react';


function App() {
 const [show,setshow]=useState(false);
  return (
    <div  className=' absolute dark:bg-slate-950  w-full dark:max-h-[100vh] h-full'>
      <Nav show={show} setshow={setshow}></Nav>
     <div className='text-5xl animate-SlidingEnter'>
       <div>
      
       </div>
     </div>
      <div className='p-4 flex justify-center dark:bg-slate-950 dark:text-slate-200'>
        <Outlet />
        </div>
     
    </div>
  )
}

export default App
