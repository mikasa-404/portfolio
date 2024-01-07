import React from "react";
import "../styles/About.css";
import logo from "../assets/Screenshot from 2024-01-07 13-14-26.png";
import { RoughNotation } from "react-rough-notation";
import { forwardRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about">
      <div className="about-wrapper">
        <div className="content">
          <div className="heading">
            Hello, it's
            <span className="name-sub">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                " Priya",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
            </span>
            {/* <span className="name-sub">Priya!</span> */}
            <div>
              <RoughNotation
                type="highlight"
                show={true}
                color="#c3e1c0"
                animate={true}
              >
                Aspiring software developer
              </RoughNotation>{" "}
              on a learning adventure at IIT ISM Dhanbad.
            </div>
          </div>
          <div className="para">
          <p>
          My web development journey started during my bachelor's, discovering a passion for problem-solving. Over the past two years, I've honed my skills, excelling in C++ for Data Structures and Algorithms. Proficient in HTML, CSS, JavaScript, React, and Node.js, I craft user-centric websites adaptable to both desktop and mobile.
</p>
          <p>With a Master's in Mathematics and Computing (graduation: 2024), I bridge the gap between intricate algorithms and elegant web solutions. Eager to apply these skills to innovative projects, I'm committed to making a real impact.</p>
          </div>
      
          
          <div className="socials">
            <a className="social-link" href="https://github.com/mikasa-404" target="_blank">
              <div className="icon">
                <FaGithub size={25} color="#53345e" />
              </div>
            </a>
            <a className="social-link" href="https://leetcode.com/mikasa404/" target="_blank">
              <SiLeetcode size={25} color="#53345e" />
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/priya-jha-1b8977135/" target="_blank">
              <FaLinkedin size={25} color="#53345e" />
            </a>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="profile-picture" />
        </div>
      </div>
    </div>
  );
});

export default About;
