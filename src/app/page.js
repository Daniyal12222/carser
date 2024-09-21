'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [x , setX] = useState('')
  const [y, setY] = useState('');
  const handleClick = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  console.log(x,y);
  
 
  return (
    <div className={`grid  grid-rows-[20px_1fr_20px] r bg-[rgb( ${x}, ${y} ,  ${y/x})] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`} style={{backgroundColor: `rgb( ${x}, ${y} ,  ${y/x})` }}   onMouseMove={handleClick}>
     <h1 style={{fontSize : `${y}px`}}>Text</h1>
    </div>
  );
}
