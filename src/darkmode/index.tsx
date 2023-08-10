import { useEffect, useState } from "react"
import {MaterialSymbolsModeNightOutline,MaterialSymbolsSunnyOutline} from '@/api/icons'
export default function darkmode(){
 const [theme,settheme]=useState(()=>{
  return localStorage.theme
 })
 
  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {     
      document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  })
  function cutover() {
    localStorage.theme === 'light'?localStorage.theme='dark':localStorage.theme='light';
   console.log(localStorage.theme);
    settheme(localStorage.theme)
  }

  return <>
   <div onClick={cutover} className="text-3xl">
   {
    theme==='dark'?<MaterialSymbolsModeNightOutline/>:<MaterialSymbolsSunnyOutline/>
   }
   </div>
  </>
}
