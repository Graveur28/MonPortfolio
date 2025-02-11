import { useState } from 'react'
import '../style/burgerMenu.scss'
export default  function BurgerMenu() {
    const [isOpen,setIsOpen]=useState(false)

    const setOpenstate=()=>{
        const reversOpen=isOpen
        setIsOpen(!reversOpen)
    }
  return (
    <div className={isOpen? 'menuButton':'menuButtonOpen'} onClick={()=>setOpenstate()}>
        <div className="menuButtonBurger">

        </div>

    </div>
  )
}

