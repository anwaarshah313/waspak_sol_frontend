import React from 'react';
import "./FooterAnimation.css";

const FooterAnimation = () => {
    return (
        <div className="image-container">
            <video className='image' autoPlay muted loop>
        <source src="/images/animation-section.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            <div className="overlay"></div>
        </div>
    );
};

export default FooterAnimation;
