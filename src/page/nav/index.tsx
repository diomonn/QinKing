
import Darkmode from '@/darkmode/index';
import {LaBars, TablerBrandGithub} from '@/api/icons';
import { Link } from 'react-router-dom';

export default function Nav(){
return <div className='dark:text-backcolor2 relative flex justify-between items-center h-14 w-full border-2 border-textcolor dark:border-backcolor2 border-solid'>
<div className='flex-1 flex justify-center '>
<h1 >你好啊</h1>
</div>

   <nav className='hidden w-64 justify-around  md:flex'>
   <Link className='hover:-translate-y-0.5 hover:shadow-textcolor dark:hover:shadow-backcolor2' to={'/test'}>Test</Link>
   <Link className='hover:-translate-y-0.5 hover:shadow-textcolor dark:hover:shadow-backcolor2' to={'/test'}>Test</Link>
   <Link className='hover:-translate-y-0.5 hover:shadow-textcolor dark:hover:shadow-backcolor2' to={'/test'}>Test</Link>
   <Link to={'/Home'}>Home</Link>
</nav>


 <div  className=' flex justify-around w-80 border-spacing-3 flex-3'>
 
  <LaBars className='text-3xl md:hidden flex  ml-5 cursor-pointer'></LaBars>

  <TablerBrandGithub className='text-3xl cursor-pointer'></TablerBrandGithub>
  <TablerBrandGithub className='text-3xl cursor-pointer'></TablerBrandGithub>
  <TablerBrandGithub className='text-3xl cursor-pointer'></TablerBrandGithub>
  <TablerBrandGithub className='text-3xl cursor-pointer'></TablerBrandGithub>
   <Darkmode ></Darkmode>
  </div>


</div>


}

