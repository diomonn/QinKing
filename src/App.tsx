import { Outlet } from 'react-router-dom';
import './index.css'
import Nav from './page/nav/index';


function App() {
 
  return (
    <div  className=' absolute dark:bg-backcolor w-full h-full'>
      <Nav ></Nav>
      <Outlet/>
    </div>
  )
}

export default App
