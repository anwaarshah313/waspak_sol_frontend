import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./whyus.css";

const CustomLeftArrow = ({ onClick }) => (
  <button className="why-arrow why-left" onClick={onClick}>
    &lt;
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button className="why-arrow why-right" onClick={onClick}>
    &gt;
  </button>
);

const testimonialData = [
  {
    profilePic: "/images/1.png",
    name: "+200%",
    work: "Growth Potential",
  },
  {
    profilePic: "/images/2.png",
    name: "50%",
    work: "Operational Cost Reduction",
  },
  {
    profilePic: "/images/3.png",
    name: "24/7",
    work: "Availability",
  },
  {
    profilePic: "/images/4.png",
    name: "+60%",
    work: "Data-Driven Decisions",
  },
  {
    profilePic: "/images/5.png",
    name: "90%",
    work: "Customer Satisfaction",
  },
  {
    profilePic: "/images/6.png",
    name: "-50%",
    work: "Manual Work",
  },
  {
    profilePic: "/images/7.png",
    name: "95%",
    work: "Precision and Accuracy",
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 526 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 526, min: 0 },
    items: 1
  }
};

const WhyUs = () => {
  return (
    <>
    
      <div className='mainDiv'>
        <div className='inDiv'>
        <video className='background-video' autoPlay muted loop>
        <source src="/images/earth-animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

          <div className='leftDiv'>
            <h1>Building Future AI</h1>
            <p>TajirAI embodies the belief that the integration of technology.</p>
          </div>
          <div className="whyUs-out">
            <Carousel
              className='why-carousel'
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {testimonialData.map((item, index) => (
                <div key={index} className="why-card-item">
                  <div className="why-card-in">
                    <img src={item.profilePic} alt={item.name} className="profile-pic" />
                    <h3 className="card-name">{item.name}</h3>
                    <p className="card-pra">{item.work}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
