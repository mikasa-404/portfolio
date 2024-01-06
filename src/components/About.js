import React from "react";
import "../styles/About.css";
import logo from "../assets/301741725-256-k246551.jpg";
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
              currently studying at IIT (ISM) Dhanbad.
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
            nisl rhoncusmattis rhoncus urna neque. Lacus vestibulum sed arcu non
            odio euismod. Enim nec dui nunc mattis enim ut tellus elementum
            sagittis. Lectus proin nibh nisl condimentum id venenatis a
            condimentum.
          </p>
          <p>
            Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
            Maecenas accumsan lacus vel facilisis volutpat est velit egestas.
            Lacus vestibulum sed arcu non odio euismod lacinia at quis. Nisi
            quis eleifendquam adipiscing vitae proin. Elit duis tristique
            sollicitudin nibh sit amet commodo nulla facilisi. Ac turpis egestas
            sed tempus urna. Facilisi cras fermentum odio eu feugiat pretium. At
            auctor urna nunc id cursus metus aliquam eleifend mi.{" "}
          </p>
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
