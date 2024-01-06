import React from 'react'
import { useState, useEffect } from 'react'
import { FaAnglesUp } from "react-icons/fa6";

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);
    useEffect(()=>{
       window.addEventListener('scroll',()=>{
        if( window.scrollY> 100) setShowButton(true)
       else setShowButton(false)
       })
    },[])
    const scrollTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
      }
  return (
    <div>
        {showButton && <FaAnglesUp className='top-btn-position top-btn-style' onClick={()=>scrollTop()} size={20}/>}
    </div>
  )
}

export default ScrollToTop