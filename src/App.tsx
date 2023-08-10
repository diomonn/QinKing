import { useState } from 'react'
import './App.css'

import Nav from './page/nav/index';
function App() {
 
  return (
    <div  className='absolute dark:bg-backcolor w-full h-full'>
    {/* <Darkmode></Darkmode> */}
 <Nav></Nav>
1   <div >
  <p className=' animate-SlidingEnter'>年后</p>
  <p>你好</p>
</div>
    </div>
  )
}

export default App
