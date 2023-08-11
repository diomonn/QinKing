import { time } from "console"



type JournalType={
  path?:string, 
  title?:string,
  time?:Date|String|Number,
  ReadTimes?:Number,
  littertitle?:Date|String|Number,
}
const Journal:JournalType[]=[{
   path: 'journal',
   title:'一',
   time:'2023-8-11',
   ReadTimes:5,
   littertitle:'逆袭'
}, {
  path: 'journal',
  title:'一',
  time:'2023-8-11',
  ReadTimes:5,
  littertitle:'逆袭'
}]
export default function FUN(){
return(

   <div className="dark:text-backcolor2 w-8/12 animate-SlidingEnter">
     <div className="flex  justify-center w-full  ">
      
     <h1 className="hover:translate-y-1 p-3  hover:shadow-none cursor-pointer text-5xl md:text-7xl  lg:text-8xl   shadow-textcolor2 dark:shadow-backcolor2 shadow-sm drop-shadow">Journal Note </h1>   
     </div>
    <ul className="mt-10 flex flex-col animate-SlidingEnter ">
       <div className="absolute -right-10">
        7
            {/* <NumberMouth num={index }></NumberMouth> */}
       </div>

       {
        Journal.map(Journal=><li className="mt-4 w-full bg-textcolor p-3"> {Journal.title}</li>)
       }
    </ul>
     
   </div>

)
}

