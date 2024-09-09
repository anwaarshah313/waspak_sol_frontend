import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./whyus.css"

const WhyUs = ({ data }) => {
    const dummyData = [
        {
            id: 1,
            icon: <i className="bi bi-bricks"></i>,
            name: "About Us",
            position: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 2,
            icon: <i className="bi bi-bricks"></i>,
            name: "About Us",
            position: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 3,
            icon: <i className="bi bi-bricks"></i>,
            name: "About Us",
            position: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 4,
            icon: <i className="bi bi-bricks"></i>,
            name: "About Us",
            position: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        // Add more items as needed
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='mainDiv'>
            <div className='inDiv'>
                <div className='leftDiv' >
                    <h1> Building Future AI</h1>
                    <p>Idrak embodies the belief that the
                        integration of technology.
                    </p>
                </div>
                <Carousel
                    className='carousel'
                    showArrows={false}
                    showIndicators={false}
                    autoPlay={true}
                    interval={2000}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    swipeable={true}
                    dynamicHeight={false}
                    emulateTouch={true}
                    useKeyboardArrows={true}
                    onChange={handleSlideChange}
                    selectedItem={currentIndex}
                >
                    {dummyData.map((person, index) => (
                        <div key={person.id} className="slide" style={{ padding: 50, boxSizing: 'border-box', textAlign: 'center' }}>
                            <div className="dummy-wrapper">
                                <div className="dummy-overlay"></div>
                                <div className="dummy-icon">{person.icon}</div>
                            </div>
                            <h3 className='card-name '>{person.name}</h3>
                            <p className='card-pra'>{person.position}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default WhyUs;
