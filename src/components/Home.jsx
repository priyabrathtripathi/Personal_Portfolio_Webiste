import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'

export const Home = () => {
  const typedRef =useRef(null);
  useEffect(() => {
    const options={
      strings:["Hello I am Priyabrath Tripathi" ,"I am Frontend Developer(Angular)" ,"And Full Stack developer (MERN)"],
      typeSpeed:50,
      backSpeed:50,
      loop:true

    }
    const typed = new Typed(typedRef.current, options)
    return ()=>{
      typed.destroy()
    }
  },[])
  return (
    <>
    <div className="container home" id='home'>
      <div className="left"
      data-aos="fade-up-right"
      data-aos-duration="1000">
        <h1 ref={typedRef}>
        </h1>
        <a href={pdf} download='Priyabrath_Tripathi_Resume.pdf' className="btn btn-outline-warning my-3">
          Download Resume
        </a>
      </div>
      <div className="right"
       data-aos="fade-up-left"
       data-aos-duration="1000">
       <div className="img">
        <img src={`/assets/${hero.imgSrc}`} alt='profile'/>
       </div>
        
      </div>
    </div>
    </>
  )
}
