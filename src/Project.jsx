import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import "./components/Project.css"
import './components/Home.css'
import img1 from "./images/Vector 1.png"
import img8 from "./images/IMG_0623.png"
import img9 from "./images/Group 11.png"
import img10 from "./images/Vector (2).png"
import img11 from "./images/Vector (3).png"
import img12 from "./images/Vector (5).png"


const Project = () => {
  const { pathname } = useLocation();


  return (
   <>
   <div className="bodyman">
    <div className="werey container">
    <div className="navman1">
        <a className="name" href="/">Mentor Jnr.</a>
       

        </div>
        <div className="under1">
            <div className="section1">
                <h1 className="fuller">Full Stack Developer</h1>
                <h1 className="fullname">Dev. Mentor Jnr.</h1>
                <p className='sectionpara'>Welcome to my portfolio! As a front-end web developer, I specialize in creating dynamic, user-friendly websites and applications. From front-end design to back-end functionality, I'm passionate about delivering high-quality solutions that exceed client expectations. Let's collaborate and bring your vision to life!</p>
                <div className="number">
          <NavLink to="/project" className={`nom ${pathname === '/project' ? 'active' : 'non-active'}`}>
            <p>01</p>
            <img src={img1} alt="" />
            <p className='proman'>Projects</p>
          </NavLink>
          <NavLink to="/download" className={`nom ${pathname === '/download' ? 'active' : 'non-active'}`}>
            <p>02</p>
            <img src={img1} alt="" />
            <p>Download Resume</p>
          </NavLink>
          <NavLink to="/contact" className={`nom ${pathname === '/contact' ? 'active' : 'non-active'}`}>
            <p>03</p>
            <img src={img1} alt="" />
            <p className='prowoman'>Contact</p>  
          </NavLink>
        </div>
        <div className="avatar1">
            <img src={img8} alt="" />
            <div className="email">
                <a href="mailto:adegokeoyesanya305@gmail.com?subject=Subject%20Here&body=Write%20your%20message%20here" target='blank' className="button">
                <img src={img9} alt="" />
                <p className="mt-3">Email Me</p>
                <img src={img10} alt="" />
                </a>
            </div>
            <div className="github">
                <a href="https://github.com/fiyinfoluwa17" target='blank' className="button">
                <img src={img11} alt="" />
                <p className="mt-3">Github</p>
                <img src={img10} alt="" />
                </a>
            </div>
        </div>
       
               
            </div>
            <div className="secondhalf">
              <div className="repo1">
              <div className="info">
              <p>Bootstrap,Css & HTML</p>
          <h4>Intro - <br />section</h4>
          <div className="githuman">
          <div className="gitman">
            <img src={img11} alt="" />
            <a href='https://github.com/fiyinfoluwa17/introsection' target='blank' className='color'>Github</a>
            <img src={img10} alt="" />
          </div>
          <div className="gitwoman">
            <img src={img12} alt="" />
            <a href='https://thisiscrazyoo.netlify.app' target='blank' className='color'>Website</a>
            <img src={img10} alt="" />
          </div>
          </div>
          
              </div>
              <div className="info1">
              <p> Css & HTML</p>
          <h4>News - <br /> Homepage</h4>
          <div className="githuman">
          <div className="gitman">
            <img src={img11} alt="" />
            <a href='https://github.com/fiyinfoluwa17/mentor-first-project' target='blank' className='color'>Github</a>
            <img src={img10} alt="" />
          </div>
          <div className="gitwoman">
            <img src={img12} alt="" />
            <a href='https://mentorjnr.netlify.app' target='blank' className='color'>Website</a>
            <img src={img10} alt="" />
          </div>
          </div>
              </div>
              <div className="info">
              <p>Javascript,Css & HTML</p>
          <h4>E - Commerce <br />Product page</h4>
          <div className="githuman"> 
          <div className="gitman">
            <img src={img11} alt="" />
            <a href='https://github.com/fiyinfoluwa17/E-commerce-product-page' target='blank' className='color'>Github</a>
            <img src={img10} alt="" />
          </div>
          <div className="gitwoman">
            <img src={img12} alt="" />
            <a href='https://rule-breakers.netlify.app' target='blank' className='color'>Website</a>
            <img src={img10} alt="" />
          </div>
          </div>
              </div>
              <div className="info">
              <p>HTML & Css</p>
          <h4>Newsletter <br />Sign-up Form</h4>
          <div className="githuman">
          <div className="gitman">
            <img src={img11} alt="" />
            <a href='https://github.com/fiyinfoluwa17/keep-playing-around-now' target='blank' className='color'>Github</a>
            <img src={img10} alt="" />
          </div>
          <div className="gitwoman">
            <img src={img12} alt="" />
            <a href='https://thatsmadoo.netlify.app' target='blank' className='color'>Website</a>
            <img src={img10} alt="" />
          </div>
          </div>
              </div>
              
              </div>
              <div className="repo2">
              <div className="info">
              <p>HTML & Css</p>
          <h4>Newsletter <br />Sign-up Form</h4>
          <div className="githuman">
          <div className="gitman">
            <img src={img11} alt="" />
            <a href='https://github.com/fiyinfoluwa17/keep-playing-around-now' target='blank' className='color'>Github</a>
            <img src={img10} alt="" />
          </div>
          <div className="gitwoman">
            <img src={img12} alt="" />
            <a href='https://thatsmadoo.netlify.app' target='blank' className='color'>Website</a>
            <img src={img10} alt="" />
          </div>
          </div>
              </div>
              <div className="info1">
              <p>Javascript,Css & HTML</p>
          <h4>E - Commerce <br />Product page</h4>
          <div className="githuman"> 
          <div className="gitman">
            <img src={img11} alt="" />
            <a href='https://github.com/fiyinfoluwa17/E-commerce-product-page' target='blank' className='color'>Github</a>
            <img src={img10} alt="" />
          </div>
          <div className="gitwoman">
            <img src={img12} alt="" />
            <a href='https://rule-breakers.netlify.app' target='blank' className='color'>Website</a>
            <img src={img10} alt="" />
          </div>
          </div>
              </div>
              <div className="info1">
              <p> Css & HTML</p>
          <h4>News - <br /> Homepage</h4>
          <div className="githuman">
          <div className="gitman">
            <img src={img11} alt="" />
            <a href='https://github.com/fiyinfoluwa17/mentor-first-project' target='blank' className='color'>Github</a>
            <img src={img10} alt="" />
          </div>
          <div className="gitwoman">
            <img src={img12} alt="" />
            <a href='https://mentorjnr.netlify.app' target='blank' className='color'>Website</a>
            <img src={img10} alt="" />
          </div>
          </div>
              </div>
              <div className="info">
              <p>Bootstrap,Css & HTML</p>
          <h4>Intro - <br />section</h4>
          <div className="githuman">
          <div className="gitman">
            <img src={img11} alt="" />
            <a href='https://github.com/fiyinfoluwa17/introsection' target='blank' className='color'>Github</a>
            <img src={img10} alt="" />
          </div>
          <div className="gitwoman">
            <img src={img12} alt="" />
            <a href='https://thisiscrazyoo.netlify.app' target='blank' className='color'>Website</a>
            <img src={img10} alt="" />
          </div>
          </div>
          
              </div>
              
              </div>
          
        </div>
        </div>
    </div>
   </div>
        
       
   </>
  )
}

export default Project
// MR RAF