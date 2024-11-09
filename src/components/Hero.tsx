import React from 'react'
import Image from 'next/image'
import profile3 from '../components/public/profile3.jpg'
import { FaFacebook } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <div className="main-container flex" >
     <div className="image" data-aos="fade-right" data-aos-duration="1300" data-aos-delay="200">
        <Image src={profile3} alt="profile-img"/>
     </div>
     <div className="content">
      <h1 data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">Hi I'm <span>Rimsha</span></h1>
      <div className="typewriter" data-aos="fade-right" data-aos-duration="1300" data-aos-delay="400">I'm a <span className="typewriter-text">Web-Developer</span></div>
       <p data-aos="fade-right" data-aos-duration="1400" data-aos-delay="500">I am a frontend developer with a passion for building responsive and modern web applications</p>
      <div className="social-links">
       <a href="#" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="600"><FaFacebook  className='media'/> </a>
       <a href="#" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="700"> <VscGithub  className='media'/></a>
       <a href="#" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="800"><BsInstagram className='media' /></a>
       <a href="#" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="900"><AiOutlineLinkedin  className='media'/></a>
    </div>
   <div className="bt1" data-aos="zoom-in" data-aos-duration="1100" data-aos-delay="1000"> <button>Hire me</button></div>
    </div></div>
    
    </div>
  )
}

export default Hero
