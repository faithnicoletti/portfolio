import './LightboxStyle.css';
import React from 'react';

const Lightbox = ({ imageUrl, onClose }) => {
  return (
    <div className="lightbox">
      <div className="lightbox-content">
        <img src={imageUrl} alt="Resume" />
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Lightbox;