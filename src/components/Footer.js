import "./FooterStyle.css"

import React from 'react'

import {FaFacebook, FaGithub, FaHome, FaInstagram, FaLink, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Bhabua kaimur ( 821101 )</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }} />
                    +918340703488 </h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }} />
                    sanjaytiwarititbpl@gmail.com</h4>  
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>This is me Sanjay Tiwari. CEO & Founder of Tech2etc. I enjoy discussing new Project and design challenges.</p>
                <div className="social">
                <a href="https://www.instagram.com/sanjay_tewary?igsh=MWRsajY2bzVqeXRibQ==">
                    <FaInstagram size={30} style={{color: "#fff" , marginRight: "1rem"}} />
                </a>
                <a href="linkedin.com/in/sanjay-tiwari30">
                    <FaGithub size={30} style={{color: "#fff" , marginRight: "1rem"}} />
                </a>
                <a href="https://www.linkedin.com/in/sanjay-tiwari30/">
                    <FaLinkedin size={30} style={{color: "#fff" , marginRight: "1rem"}} />
                </a>    
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
