import React from 'react'
import { CiFacebook,CiLinkedin,CiInstagram} from 'react-icons/ci';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
export const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
       data-aos="zoom-in-up"
       data-aos-duration="1000">
        <a href='https://www.instagram.com/arjun_1220tiwari/profilecard/?igsh=MTQyNXk0cng3cnZrdQ==' target='_blank' className="items"><CiInstagram className=''/></a>
        <a href='https://www.facebook.com/arjun1220.tiwari' target='_blank' className="items"><CiFacebook className=''/></a>
        <a href='https://www.linkedin.com/in/priyabrath-tripathi-5b294a182/' target='_blank' className="items"><CiLinkedin className=''/></a>
        <a href='https://x.com/Priyavrath75226?t=0ekySWfqHroAW4yT75Nibw&s=09' target='_blank' className="items"><FaSquareXTwitter className=''/></a>
        <a href='https://github.com/priyabrathtripathi' target='_blank' className="items"><FaGithubSquare className=''/></a>
        <a href="mailto:priyavrathtiwariluck@gmail.com" target='_blank' className="items"><SiGmail className=''/></a>
      </div>
    </div>
    
    </>
  )
}
