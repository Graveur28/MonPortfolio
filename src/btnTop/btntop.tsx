import { useEffect, useState } from 'react'

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
            <button style={{
                position:"fixed",
                fontSize:"17px",
                bottom:"50px",
                right:"30px",
                height:"35px",
                display:"flex",
                justifyContent:"center",
                alignContent: "center",
                width:"35px",
                widows:"50px",
                borderRadius:"50%",
                border:"none",
                //background:"rgba(0,0,0,0.5)",
                cursor:"pointer",
                
            }}
            onClick={scrollTop}>^</button>
         )}
    </>
  )
}

