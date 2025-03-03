import { useEffect, useState } from 'react'
import  '../style/btnTop.scss'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



export default function Btntop() {
    const [backTop,setBackTop]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){setBackTop(true)}
            else{setBackTop(false)}
        })
    },[])

    const scrollTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <>
         {backTop && (
            <span className='btnnnd' 
            onClick={scrollTop}><ArrowUpwardIcon className='arrr'/></span>
         )}
    </>
  )
}

