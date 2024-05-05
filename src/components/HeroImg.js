import "./HeroImgStyle.css";


import React from 'react'

import IntroImg from "../assets/intro-bg .jpg"
import sanjayimg from "../assets/SANJAY IMAGE.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p> HI, I'M A SANJAY TIWARI.</p>
            <h1>Reactjs & Nodejs Developer</h1>
            <div>
                <Link to ="https://docs.google.com/document/d/1GyxLBpN-v26TTL4IXhj7wHYWfFYhExiJ/edit?usp=sharing&ouid=117543722848585414962&rtpof=true&sd=true" className="btn">Resume</Link>
                <Link to ="/contact" className="btn btn-light">Contact</Link>
                
            </div>
        </div>
        <div className="personal-img">
          <img className="sanjay-img" src={sanjayimg} alt="sanjayimg" />
        </div>
      
    </div>
  )
}

export default HeroImg
