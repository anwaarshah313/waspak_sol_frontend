
import React, { useState, useEffect } from 'react';
import './about.css'
const Act = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Welcome to Tajir Ai !', 'We offer amazing services.', 'Contact us for more info.'];
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className='about-main'>
        <div className='about-in'>

          <div className='oneDiv'>
            <h1 >
              {texts[textIndex]}
            </h1>
            <p>TajirAI is an industry-leading custom software development company offering software solutions ranging from web app development to ML, NLP and LLM  based applications. As a cutting-edge software development company, we highly focus on client satisfaction and product quality while managing project deadlines effectively.</p>
          </div>
        </div>
      </div>

      <div className='about-main-two'>
          <div className='wrapperDiv'>
          <video className='backgroundVideo' autoPlay muted loop>
                <source src="/images/about-animation.m4v" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
        <div className='about-in'>
            <div className='twoDiv'>
             
              <div className='twoInDiv'>
                <h1>Connection is everything</h1>
                <p>With expertise in multiple domains, such as developing Dashboards for monitoring  and artificial intelligence-based projects, our client base spans analytic software for bot, Customer sales analysis, LLM based bots for specific business use cases, web automation and scrapping tools and many more.
<br/>
<br/>
We want to help our clients grow their businesses by providing software solutions based on the latest technologies.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Act;

