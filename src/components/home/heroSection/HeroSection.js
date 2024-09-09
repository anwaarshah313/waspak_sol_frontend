import React from 'react';
import "./herosection.css";
import Navbar from '../navbar/Navbar';

export default function HeroSection() {
    return (
        <main className='main'>
           
            <div className='textDiv'>
                <h1>We're Architects of Change, <br/> Building Future with AI.</h1>
                <p>Idrak embodies the belief that the integration of technology and humanity can achieve unprecedented greatness.
                    <br />
                    We go beyond being AI developers, serving as agents of </p>
                    {/* <button className='button'><i class="bi bi-box-arrow-up-right"></i></button> */}
           
           <button className='button'> <i className='bi bi-box-arrow-up-right'></i> </button>
            </div>
        </main>
    )
}
