// import {  useRef } from "react"
// // interface BezierPath{
// //   start: {
// //     x: number,
// //     y: number
// //    },
// //    CurveTo: {
// //     x:number,
// //     y:number,
// //     cp1x:number,
// //     cp2x:number,
// //     cp1y:number,
// //     ccp2y:number,
// //    },
// // }

// export default function test(){
//   const Canvas=useRef<HTMLCanvasElement>(null)
//   let a=10
//   // type Porint={
//   //   x:number,
//   //   y:number,
//   //   arc?:number
//   // }
// function Darw(x:number,y:number) {
//   const CanvasCount=Canvas.current?.getContext("2d")
//   x=Math.floor(Math.random()*Canvas.current?.width) 
//   CanvasCount?.beginPath()
//    CanvasCount?.moveTo(x,y),  
//    y=y+Math.floor(Math.random()*5)+Canvas.current?.height
  
//   CanvasCount?.lineTo(x,y)
//   CanvasCount?.stroke()
// }  


// // 给定一个范围随机   
//   function Draw() {
  
//     requestAnimationFrame(()=>{
//       Darw(100,20)
//       a--
//       if (a<0) {
//          return
//       }
//       Draw()
//     }) 

//   }
//   // function  DrawA(startAngle:number) {
//   //   const CanvasCount=Canvas.current?.getContext("2d")
//   //   console.log(Canvas.current?.width/2);
    
//   //   // CanvasCount?.beginPath()
//   //   // CanvasCount?.arc(100,50,50,-4,Math.PI,false)
//   //   // CanvasCount?.arc(100,150,50,-4,Math.PI,false)
//   //   // CanvasCount?.stroke()
//   // }
//   // useEffect(()=>{
   
//   //   const CanvasCount=Canvas.current?.getContext("2d")
//   //   CanvasCount?.beginPath()
//   //  CanvasCount?.arc(100,50,30,-4,Math.PI,true)
//   //  CanvasCount?.arc(100,150,30,-4,Math.PI,true)
//   //  CanvasCount?.arc(100,50,40,-4,Math.PI,false)
//   //  CanvasCount?.arc(100,150,40,-4,Math.PI,false)
//   //  CanvasCount?.stroke()
//   // })
//   return <>
//    <canvas  ref={Canvas}   onClick={e => {
//          Draw()        
//       }} className="-z-1000 absolute w-[100vw] h-[100vw]"></canvas>
//   </>
// }
