import React, { useState } from "react";
import img1 from "./images/Saly-13.png"
import img2 from "./images/Group 5.png"
import img3 from "./images/Group 6.png"
import img4 from "./images/Group 7.png"
import img5 from "./images/logos_javascript.png"
import img6 from "./images/Vector (1).png"
import img7 from "./images/Vector.png"
import img8 from "./images/IMG_0623.png"
import img9 from "./images/Group 11.png"
import img10 from "./images/Vector (2).png"
import img11 from "./images/Vector (3).png"
import img12 from "./images/Group (6).png"
import './components/Home.css'
import { Offcanvas, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () =>{
    const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
    return(
        <>
        <div className="bodyman">
        <div className="navman container">
        <a className="name" href="/">Mentor Jnr.</a>
        <div className="navwoman">
            <li><a className="links" href="/project">Projects</a></li>
            <li><a className="links" href="/download">Download Resume</a></li>
            <li><a className="links" href="/contact">Contacts</a></li>
        </div>
        
        <img className="icon" src={img12} alt="" onClick={handleToggleOffcanvas} />
      
      <Offcanvas className="w-75" style={{ backgroundColor: '#292727' }}  show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" scroll={false} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: '#FFF' }}>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Offcanvas content goes here */}
          <ul style={{ height: '150px', display: 'flex',justifyContent: 'space-between', flexDirection: 'column',color: '#FFF' }}>
            <li><a style={{ color: '#FFF', textDecoration:'none' }} href="/project">Projects</a></li>
            <li><a style={{ color: '#FFF', textDecoration:'none' }} href="/download">Download Resume</a></li>
            <li><a style={{ color: '#FFF', textDecoration:'none' }} href="/contact">Contacts</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

        </div>
        <div className="under container">
          
            <div className="section2">
                <img src={img1} alt="" />
            </div>
            <div className="section1">
                <h1 className="fuller">Frontend Developer</h1>
                <h1 className="fullname">Dev. Mentor Jnr.</h1>
                <p className="sectionpara">Welcome to my portfolio! As a front-end web developer, I specialize in creating dynamic, user-friendly websites and applications. From front-end design to back-end functionality, I'm passionate about delivering high-quality solutions that exceed client expectations. Let's collaborate and bring your vision to life!</p>
                <div className="stack">
                <img className="boot" src={img7} alt="" />
                <img src={img4} alt="" />
                <img src={img3} alt="" />
                <img src={img5} alt="" />
                <img className="rotating-icon" src={img6} alt="" />
                <img src={img2} alt="" />
            </div>
            </div>
        </div>
        <div className="container">
        <div className="avatar">
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
       
        </div>
        </>
    )
}

export default Home;