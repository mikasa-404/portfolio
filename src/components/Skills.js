import React from 'react'
import "../styles/Skills.css"
import { RoughNotation } from "react-rough-notation";
import { TypeAnimation } from "react-type-animation";

const Skills = () => {
  return (
    <div className='skills'>
      
        <div className='section-heading'> 
                My <span className='section-sub'>
                <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                " Skills",
                1000,' ',
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
                </span>
              </div>
        <div className='section-subheading'>
          <RoughNotation
                type="underline"
                show={true}
                color="#e6b6aa"
                animate={true}
                strokeWidth={2}
                iterations={4}
              >
          Technologies I Have Worked On</RoughNotation>
          
          </div>
        <div className='icons'>

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />


        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" />
                    
          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
          
        </div>

    </div>
  )
}

export default Skills