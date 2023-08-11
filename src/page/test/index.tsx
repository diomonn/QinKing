import { useEffect, useRef } from "react"
interface BezierPath{
  start: {
    x: number,
    y: number
   },
   CurveTo: {
    x:number,
    y:number,
    cp1x:number,
    cp2x:number,
    cp1y:number,
    ccp2y:number,
   },
}
const bezierPath:BezierPath[]=[{
  start:{
    x:100,
    y:10
  },
  CurveTo: {
  x:100,
  y:180,
  cp1x:100,
  cp2x:100,
  cp1y:10,
  ccp2y:180,
 }, 
},
{
  start:{
    x:73,
    y:31, 
  },
  CurveTo: {
    x:182,
    y:158,
    cp1x:203,
    cp2x:29,
    cp1y:13,
    ccp2y:174,
   }, 
}

]
export default function test(){
  const Canvas=useRef<HTMLCanvasElement>(null)
  function EverDraw(params:string[],CanvasCount:CanvasRenderingContext2D|null|undefined,Bezi:BezierPath ) {
   let a=0;
    switch (params[a]) {
      case 'start':
         console.log(1);
         
         CanvasCount?.moveTo(Bezi.start.x, Bezi.start.y);

        break;
      case 'CurveTo':
        console.log(2);
        
         CanvasCount?.bezierCurveTo( Bezi.CurveTo.cp1x, Bezi.CurveTo.cp1y,Bezi.CurveTo.cp2x, Bezi.CurveTo.ccp2y,Bezi.CurveTo.x, Bezi.CurveTo.y,);
        break;
    
      default:
        break;
    }
    // requestAnimationFrame(()=>{
      // a+=1;
      // EverDraw(params,CanvasCount,Bezi)
      // if (a>=params.length) {
      //   return 
      // }
    // })
  }
  function Draw(num: number) {
    const CanvasCount:CanvasRenderingContext2D|null|undefined=Canvas.current?.getContext("2d")
    const a=[]
    for (const key in bezierPath[num]) {
     
      a.push(key) 
    }
    CanvasCount?.beginPath()
    
    EverDraw(a,CanvasCount,bezierPath[num])
    CanvasCount?.stroke()
  }
  useEffect(()=>{
    const CanvasCount=Canvas.current?.getContext("2d")
   CanvasCount?.beginPath()
    CanvasCount?.moveTo(458,296)
    CanvasCount?.bezierCurveTo(583,291,624,120,437,135)
    CanvasCount?.quadraticCurveTo(400,200,250,300,)
    CanvasCount?.stroke()
  })
  return <>
   <canvas ref={Canvas} width={200}    onClick={e => {
         Draw(0)        
      }} height={200} className="border-2"></canvas>
  </>
}
