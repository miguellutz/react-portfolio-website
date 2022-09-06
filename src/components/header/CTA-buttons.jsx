import React from 'react'
import CV from '../../assets/CV_Tech_2_compressed.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA
