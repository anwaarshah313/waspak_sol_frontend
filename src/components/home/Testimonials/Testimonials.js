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
        profilePic: "https://via.placeholder.com/150",
        name: "John Doe",
        work: "Software Developer",
        description: "John has been a key player in our development team, consistently delivering complex projects on time."
    },
    {
        profilePic: "https://via.placeholder.com/150",
        name: "Jane Smith",
        work: "Product Manager",
        description: "Jane's insights into product development and market trends have significantly boosted our product's success."
    },
    {
        profilePic: "https://via.placeholder.com/150",
        name: "Alice Johnson",
        work: "UI/UX Designer",
        description: "Alice's designs are always user-centric, ensuring a great user experience and enhancing customer satisfaction."
    },
    {
        profilePic: "https://via.placeholder.com/150",
        name: "Mike Brown",
        work: "Data Scientist",
        description: "Mike has developed innovative solutions using data analytics that have transformed our business strategies."
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
                                <img src={item.profilePic} alt={item.name} className="profile-pic" />
                                <div className='in-wrapper'>
                                    <h3>{item.name}</h3>
                                    <p className="work">{item.work}</p>
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
