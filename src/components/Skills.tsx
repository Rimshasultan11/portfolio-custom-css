import React from 'react'

const Skills = () => {
  return (

      <div className="skill" id="skill">
    <div className="content">
        <div className="title" data-aos="zoom-in" data-aos-duration="1100" data-aos-delay="200"><span>My Skills</span></div>
        <div className="skill-deta">
            <div className="text">
                <div className="topic text-white">Skills Reflects Our Knowledge</div>
                <p>My skills in web development and computer science include extensive experience with HTML CSS and TypeScript. I am also proficient in MS Office and have teaching experience which enhances my ability to apply both technical and non-technical skills effectively. Completing each project with excellence is my hallmark.</p>
                <div className="experience">
                    <div className="num">1</div>
                    <div className="exp">
                        Years of<br/>
                        Experience

                    </div>

                </div>

            </div>
            <div className="boxes" >
                <div className="box"  data-aos="zoom-in" data-aos-duration="1100" data-aos-delay="200">
                    <div className="topic">HTML</div>
                    <div className="per">95%</div>
                </div>
                <div className="box"  data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">
                    <div className="topic">CSS</div>
                    <div className="per">80%</div>
                </div>
                <div className="box" data-aos="zoom-in" data-aos-duration="1300" data-aos-delay="400">
                    <div className="topic">JavaScript</div>
                    <div className="per">60%</div>
                </div>
                <div className="box" data-aos="zoom-in" data-aos-duration="1400" data-aos-delay="500">
                    <div className="topic">TypeScript</div>
                    <div className="per">70%</div>
                </div>
                <div className="box" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="600">
                    <div className="topic">MS Office</div>
                    <div className="per">90%</div>
                </div>

            </div>
        </div>
    </div>

    </div>
  )
}

export default Skills
