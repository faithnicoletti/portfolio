import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import codingImage from "../assets/coding.png";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a junior full stack software developer.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={codingImage} 
                    className="img"
                    alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={codingImage} 
                    className="img"
                    alt="true"/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default AboutContent