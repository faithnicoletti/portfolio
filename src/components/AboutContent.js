import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import aboutImage1 from "../assets/aboutimage1.png";
import aboutImage2 from "../assets/aboutimage2.png";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a junior full stack software developer.
                I thrive on turning concepts into reality through code. 
                I excel at collaborating with teams to transform ideas into user-friendly applications. 
                My passion for creation drives me to craft both elegant software solutions,
                 and meaningful human connections.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={aboutImage2} 
                    className="img"
                    alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={aboutImage1} 
                    className="img"
                    alt="true"/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default AboutContent