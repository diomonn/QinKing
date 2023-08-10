// import {useState} from 'react';
import Darkmode from '@/darkmode/index';
import {TablerBrandGithub,LogoOutline} from '@/api/icons';
export default function Nav(){
return <div className='dark:text-backcolor2 absolute flex justify-between items-center h-14 w-full border-2 border-textcolor dark:border-backcolor2 border-solid'>
<div className='flex-1 '>
<h1 >你好啊</h1>

</div>
  <div  className=' flex justify-around w-64 border-spacing-3 flex-10'>
  <TablerBrandGithub className='text-3xl'></TablerBrandGithub>
  <TablerBrandGithub className='text-3xl'></TablerBrandGithub>
  <TablerBrandGithub className='text-3xl'></TablerBrandGithub>
  <TablerBrandGithub className='text-3xl'></TablerBrandGithub>
   <Darkmode></Darkmode>
  </div>



</div>

}

