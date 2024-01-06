import React from 'react'
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import "../styles/Portfolio.css"
import { useRef } from 'react'
import ScrollToTop from './ScrollToTop'
import Skills from './Skills'
import Footer from './Footer'

const Portfolio = () => {
  const project=useRef(null);
  const about=useRef(null);
  const contact=useRef(null);
  
  return (
    <div className='portfolio'>
        <ScrollToTop/>
        <Header projectRef={project} aboutRef={about} contactRef={contact}/>
        <About ref={about}/>
        <Skills/>
        <Projects ref={project}/> 
        {/* builtin property ref */}
        <Contact ref={contact}/>
        <Footer/>
    </div>
  )
}

export default Portfolio