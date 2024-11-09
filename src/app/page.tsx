"use client"
import About from '@/components/About'
import Hero from '@/components/Hero'
import React from 'react'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
const page = () => {
  useEffect(()=>{
    AOS.init({
   easing : "ease-out-back",
   duration : 1200,
   delay : 100,
   mirror : true,
   anchorPlacement : "bottom-bottom",
   offset : 160,
    });
    AOS.refresh()
  }, []);

  return (
    <div>
      <main>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </main>
    </div>
  )
}

export default page
