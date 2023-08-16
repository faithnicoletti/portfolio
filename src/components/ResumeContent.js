import "./ResumeContentStyles.css";
import { Link } from "react-router-dom";
import Lightbox from './Lightbox';
import resumeImage from "../assets/resume.png";

import React, {useState} from 'react'

const ResumeContent = () => {
    const [showLightbox, setShowLightbox] = useState(false);
  
    const handleImageClick = () => {
      setShowLightbox(true);
    };
  
    const handleCloseLightbox = () => {
      setShowLightbox(false);
    };
  
    return (
      <div className="resume">
        <div className="left">
          <h1>Resume</h1>
          <p>Contact me here:</p>
          <Link to="/contact">
            <button className="btn">Reach Out</button>
          </Link>
        </div>

        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img
                src={resumeImage}
                className="img"
                alt="true"
                onClick={handleImageClick}
              />
            </div>
          </div>
        </div>
        {showLightbox && (
          <Lightbox imageUrl={resumeImage} onClose={handleCloseLightbox} />
        )}
      </div>
    );
  };
  
  export default ResumeContent;