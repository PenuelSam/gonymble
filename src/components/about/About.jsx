import React from 'react'
import './about.css'
import box from '../../assets/globe-box.png'

const About = () => {
  return (
    <div className='about'>
      <div className="container about-container">
        <div className="about-l">
            <div className="about-content">
                <div className="about-title">
                    <h1>our company</h1>
                    <span></span>
                </div>
                <p>We are a team of innovators and professionals from a variety of backgrounds on a mission to empower your business and facilitate its growth by using technology to drive mobility and making it easier for you to reach and serve new and existing customers. </p>
            </div>
            <div className="about-main">
                <div className="about-mission">
                    <h2>Mission</h2>
                <p>We provide a modern solution to help you automate, streamline, monitor, and accelerate your delivery operation.</p>
                </div>
                <div className="about-vision">
                    <h2>Vision</h2>
                    <p>Gonymble was born out of the need to solve the painful problem of last-mile logistics for businesses. We serve as an interface between your business and customers by connecting you to a network of last-mile delivery.</p>
                </div>
            </div>
        </div>
        <div className="about-r flex items-center justify-center">
            <div className="about-image ">
                <img src={box} alt=""  />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
