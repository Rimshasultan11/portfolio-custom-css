import React from 'react'

const Contact = () => {
  return (

      <div className="contact"  id="contact">
       <div className='content'>
       <div className="title text-white" data-aos="zoom-in" data-aos-duration="1100" data-aos-delay="200"><span>Contact me</span></div>
       <div className="text">
        <div className="topic">Have any Project</div>
        <p>If you have a project in mind, a question, or just want to say hello, feel free to get in touch. I’d love to hear from you!</p>
   </div>
       <div className='contact-form-con'>
       <form className='contact-form'>
        <label htmlFor="name">Name</label>
        <input type="name" name="name" id="name" placeholder='Your Name'/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder='Your Name'/>
        
        <label htmlFor="Phone">Phone No</label>
        <input type="number" name="number" id="number" placeholder="Your number" required />

        <label htmlFor="name">Message</label>
        <textarea         name="msg" id="msg" rows={5} placeholder="Your Message" ></textarea>
       <button className="button">Send Message</button>
       </form>
       </div>
       </div>
      
    </div>
  )
}

export default Contact
