import { forwardRef } from 'react'
import "../styles/Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RoughNotation } from "react-rough-notation";
import { TypeAnimation } from "react-type-animation";

const Contact = forwardRef((props, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dm0oz2q', 'template_iq51o1h', form.current, 'YhRFJ3uHL95SMfr1R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
  return (
    <div ref={ref} className='contact'>
        <div className='section-heading'> 
                Contact <span className='section-sub'>
                <TypeAnimation
              sequence={[
                " Me",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
                </span>
              </div>
              <div className="section-subheading">
        <RoughNotation
          type="underline"
          show={true}
          color="#83b5f7"
          animate={true}
          strokeWidth={2}
          iterations={4}
        >
      Send me a{" "}
         message!👇
        </RoughNotation>
      </div>
      <div className='contact-form'>
      <form ref={form} onSubmit={sendEmail}>
      <label className="">Name</label>
      <input className='text' type="text" name="user_name" />
      <label>Email</label>
      <input className="text" type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input  className="send-btn" type="submit" value="Send" />
    </form>
    </div>
    </div>
  )
})

export default Contact