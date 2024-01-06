import React from 'react'
import '../styles/Header.css'
const Header = ({projectRef, aboutRef, contactRef}) => {
  const scrollToSection=(elementRef)=>{
    window.scrollTo({
        top: elementRef.current.offsetTop-60, 
        // top: is distance from top
        behavior: "smooth"
    })
  }
  return (
    <div className='header'>
      <div className='start'>
        <div className='name'>PRIYA <span className='name-sub'>JHA</span> </div>
        <ul className='link-wrapper'>
            <li onClick={()=>{
              scrollToSection(aboutRef)
            }} className='link'>About</li>
            <li onClick={()=>{
              scrollToSection(projectRef)
            }} className='link'>Projects</li>
            <li onClick={()=>{
              scrollToSection(contactRef)
            }} className='link'>Contact</li>
        </ul>
        </div>
        <div className='nav-button'>
          
        <a className="button" href="https://drive.google.com/file/d/1nlSJB97DOVm34V6B16AsQpIpVCoffsC3/view?usp=sharing" target='_blank'>Download CV</a>
        </div>
    </div>
  )
}

export default Header