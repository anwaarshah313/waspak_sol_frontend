import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./testimonials.css";

// Custom arrow components
const CustomLeftArrow = ({ onClick }) => (
    <button className="arrow left" onClick={onClick}>
        &lt; {/* Styling this button as needed */}
    </button>
);

const CustomRightArrow = ({ onClick }) => (
    <button className="arrow right" onClick={onClick}>
        &gt; {/* Styling this button as needed */}
    </button>
);
const testimonialData = [
    {
        profilePic: "/images/T1_1.png",
        name: "Cyber City",
        work: "Software Developer",
        description: "In an age where AI companies are a plenty, TajirAI truly stands out. Their products are not just innovative, but they come with a depth of understanding of the real-world challenges businesses face. Callwise has been a game-changer for our customer support. "
    },
    {
        profilePic: "/images/t1.jfif",
        name: "Netcomm",
        work: "Product Manager",
        description: "Our partnership with TajirAI has redefined what we thought was possible with AI. From conversational AI to their advancements in robotics, it's clear that TajirAI isn't just on the cutting edge—they're creating it."
    },
    {
        profilePic: "/images/T3.png",
        name: "Prime",
        work: "UI/UX Designer",
        description: "As a startup founder, I've had the pleasure of integrating several TajirAI solutions into our operations. Their commitment to excellence and seamless adaptability to our needs has been exemplary. It's not just AI; it's a brighter future with TajirAI."
    }
];

const Testimonials = ({ data }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 800 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 800, min: 526 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 526, min: 0 },
            items: 1
        }
    };

    return (
        <div className="main-out">
        <div className="itemDiv">
            <Carousel
                className='carousel-test'
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
            >
                {testimonialData.map((item, index) => (
                    <div key={index} className="card-item">
                        <div key={index} className="card-in">
                            <div className='top-wrapper'>
                                <div className='profileDiv'>
                                    
                                <img src={item.profilePic} alt={item.name} className="profile" />
                                </div>
                                <div className='in-wrapper'>
                                    <h3>{item.name}</h3>
                                    {/* <p className="work">{item.work}</p> */}
                                </div>
                            </div>
                            <p className="description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
        </div>
    );
};

export default Testimonials;
