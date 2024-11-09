import React from 'react'
import Image from 'next/image'
import profile3 from '../components/public/profile3.jpg'
const About = () => {
  return (
<div>
    
     <div  className="about"  id="about">
        <div className="content">
     <div className="title" data-aos="zoom-in" data-aos-duration="1100" data-aos-delay="200"><span>About Me</span></div>
    <div className="about-deta">
        <div className="right">
        <p className="about-text">I am <span>Rimsha</span>  I am a dedicated web developer and experienced teacher with skills in HTML  CSS  and TypeScript.
     I m passionate about creating visually appealing and effective websites using modern development practices
     I am also proficient in MS Office which supports my professional and teaching work Teaching is my passion
     and I am always eager to help my students learn new concepts and support their growth</p>
        <div className="exp-area ">
            <p className="exp">Experience:
             <span>1 years</span>
            </p>
            <p className="exp">Speciality:
                <span>Web-Designer </span>
               </p>
               <p className="exp">Adress:
                <span>Hyderabad Pakistan </span>
               </p>
               <p className="exp">Email:
                <span><a href='rimshasultan874@gmail.com'>rimshasultan874@gmail.com</a></span>
               </p>
               <p className="exp">phone:
                <span>+92 34XXXXXXXX</span>
               </p></div></div>
               <div className="left" data-aos="fade-left" data-aos-duration="1100" data-aos-delay="200">
                <Image src={profile3} alt=""/>
             </div></div>
    
            </div>
        </div>
    </div>

  )
}

export default About
