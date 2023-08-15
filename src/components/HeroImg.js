import "./HeroImgStyles.css";
import IntroImg from "../assets/coding.png";
import { Link } from "react-router-dom";
import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" 
        src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I AM FAITH NICOLETTI</p>
        <h1> A Software Engineer.</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg