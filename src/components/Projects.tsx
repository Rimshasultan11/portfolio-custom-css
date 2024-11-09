import React from 'react'
import Image from 'next/image'
import pic1 from '../components/public/pic1.jpg'
import pic2 from '../components/public/pic2.jpg'
import pic3 from '../components/public/pic3.jpg'
const Projects = () => {
  return (
    <div>
      <div className="project" id="project">
    <div className="content">
        <div className="title" data-aos="zoom-in" data-aos-duration="1100" data-aos-delay="200"><span>My Projects</span></div>
        <div className="image-con" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">
            <div className="img-pro" data-aos="zoom-in" data-aos-duration="1300" data-aos-delay="400">
           <Image src={pic1} alt=""/>
           <h2> Static Intrective Resume project</h2>
            </div>
            <div className="img-pro" data-aos="zoom-in" data-aos-duration="1400" data-aos-delay="400">
                <Image src={pic2}  alt=""/>
                <h2> Static Intrective Resume project</h2>
                 </div>
                 <div className="img-pro" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="600">
                    <Image src={pic3}  alt=""/>
                    <h2>Bakery Website</h2>
                     </div>
                
                     
        </div>

    </div>

</div>
    </div>
  )
}

export default Projects
