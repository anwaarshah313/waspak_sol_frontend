import React from 'react';
import "./herosection.css";

export default function HeroSection() {
    return (
        <main className='main'>
            <div className='video-background'>
                <video 
                    width="100%" 
                    height="auto" 
                    autoPlay 
                    muted 
                    loop
                    src="/images/video-animation.m4v" // Update the path to your video file
                    type="video/m4v"
                />
            </div>
            <div className='textDiv'>
                <h1>We're Architects of Change, <br/> Building Future with AI.</h1>
                <p>Idrak embodies the belief that the integration of technology and humanity can achieve unprecedented greatness.
                    We go beyond being AI developers, serving as agents of </p>
                <button className='button'> <i className='bi bi-box-arrow-up-right'></i> </button>
            </div>
        </main>
    )
}
