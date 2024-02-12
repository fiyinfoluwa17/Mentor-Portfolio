import React from "react";
import img1 from "./images/Saly-13.png"
import img2 from "./images/Group 5.png"
import img3 from "./images/Group 6.png"
import img4 from "./images/Group 7.png"
import img5 from "./images/logos_javascript.png"
import img6 from "./images/Vector (1).png"
import img7 from "./images/Vector.png"
import img8 from "./images/Ellipse 2.png"
import img9 from "./images/Group 11.png"
import img10 from "./images/Vector (2).png"
import img11 from "./images/Vector (3).png"
import './components/Home.css'

const Home = () =>{
    return(
        <>
        <div className="navman">
        <a className="name" href="/">Mentor Jnr.</a>
        <div className="navwoman">
            <li><a className="links" href="/project">Projects</a></li>
            <li><a className="links" href="/download">Download Resume</a></li>
            <li><a className="links" href="/contact">Contacts</a></li>
        </div>

        </div>
        <div className="under">
            <div className="section1">
                <h1 className="fuller">Full Stack Developer</h1>
                <h1 className="fullname">Dev. Mentor Jnr.</h1>
                <p className="sectionpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
                <div className="stack">
                <img className="boot" src={img7} alt="" />
                <img src={img4} alt="" />
                <img src={img3} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img2} alt="" />
            </div>
            </div>
            <div className="section2">
                <img src={img1} alt="" />
            </div>
        </div>
        <div className="avatar">
            <img src={img8} alt="" />
            <div className="email">
                <a href="mailto:adegokeoyesanya305@gmail.com?subject=Subject%20Here&body=Write%20your%20message%20here" target='blank' className="button">
                <img src={img9} alt="" />
                <p>Email Me</p>
                <img src={img10} alt="" />
                </a>
            </div>
            <div className="github">
                <a href="https://github.com/fiyinfoluwa17" target='blank' className="button">
                <img src={img11} alt="" />
                <p>Github</p>
                <img src={img10} alt="" />
                </a>
            </div>
        </div>
        </>
    )
}

export default Home;