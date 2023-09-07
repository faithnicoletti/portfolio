import "./FooterStyles.css";
import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    < FaHome size={20} style={{color:"#FFFFFF", marginRight:"2rem"}}/>
                    <div>
                        <p>Boston, Massachusetts</p>
                    </div>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color:"#FFFFFF", marginRight:"2rem"}}/>
                    <div>
                    <p>faithalicia22@gmail.com</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#FFFFFF", marginRight:"2rem"}}/>
                    1-518-570-9727</h4>
                </div>
            </div>
            <div className="right">
                <h4>More About Me:</h4>
                <p>Check out my LinkedIn and 
                    Github for more information:</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/faith-nicoletti" 
                        target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{color:"#FFFFFF", marginRight: "2rem"}} 
                            /></a>
                        <a href="https://github.com/faithnicoletti" 
                        target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{color:"#FFFFFF", marginRight: "2rem"}} 
                            /></a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer