import React, { forwardRef } from 'react'
import "../styles/Contact.css"
const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='contact'>Contact</div>
  )
})

export default Contact