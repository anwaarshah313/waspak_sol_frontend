import React, { useState, useEffect } from 'react';
import './services.css';

export default function Services() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            heading: 'Backend Development',
            description: 'Working with our back-end developers ensures you will get the most attractive outcomes as our product designers are continually dealing with cutting-edge technologies like Python,.NET,  NodeJS, PHP,  and more that provide state-of-the-art results while saving you development time and money.',
            longDescription: 'This is a more detailed description of Product 1. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            githubLink: 'https://github.com/product1',
        },
        {
            heading: 'Full Stack Development with AI Integration',
            description: 'Extend your web applications functionalities with AI at TajirAI. Our team of experienced Full Stack developers helps integrate advanced AI/ML models to enable image recognition, natural language processing, and predictive analytics paving the path for intelligent business operations.',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            githubLink: 'https://github.com/product2',
        },
        {
            heading: 'Front End Development',
            description: 'Our team of full-stack developers is an expert in designing and curating the front end for applications that drive engagement. The team has an aptitude for all the latest front-end development languages, such as the most recent versions of AngularJS, React, Vue.JS, Ext.JS, ThreeJS and more.',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            githubLink: 'https://github.com/product2',
        },
        {
            heading: 'AI Software Development',
            description: 'TajirAI expert-level software developers utilize artificial intelligence to automate several front-end processes, such as error-free code generation and nuanced website design mock-ups. Our software specialists program and deploy intelligent predictive modeling to assist back-end developers in building easily scalable systems efficiently, and with AI algorithms, applications are easily customized to recognize and adapt to usage patterns.',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            githubLink: 'https://github.com/product2',
        },
        {
            heading: 'AI Frameworks',
            description: 'Our software experts leverage advanced artificial intelligence technologies, including LangChain, Ollama, OpenAI, Whisper, TensorFlow, Keras, PyTorch, scikit-learn, Selenium, and BeautifulSoup, to create AI-based solutions, LLM-powered applications, and web automation and web scraping projects. We design and deploy interfaces that streamline data processing, recognize patterns in large datasets, and optimize workflows for data scientists, enhancing the overall efficiency and effectiveness of their work.',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            githubLink: 'https://github.com/product2',
        },
        {
            heading: 'Natural Language Processing Developers',
            description: 'TajirAI adept software developers create intuitive natural language processing programs to ensure seamless communication between personnel, as well as to provide end-users with an enriching experience during server programming projects. Our expert software developers customize all NLP resources to accurately translate and expediently convey responses to all users.',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            githubLink: 'https://github.com/product2',
        },
        // Add more products as needed
    ];

    const handleSeeMore = (product) => {
        setSelectedProduct(product);
        document.body.classList.add('modal-open');
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
        document.body.classList.remove('modal-open');
    };

    return (
        <div className="services-container">
            <h1 className='sub-title'>A Complete Solution for AI SaaS Startups</h1>
            <p className='pra'>Explore the key features of our AI tool, AI SaaS startups need to thrive.</p>

            <div className="servicesDiv">
                {products.map((product, index) => (
                    <div className="services-card" key={index}>
                        <h3>{product.heading}</h3>
                        <p>{product.description}</p>
                        <div className='buttonOutDiv'>
                        <button className="see-more-btn" 
                        // onClick={() => handleSeeMore(product)}
                        >See More</button>
                        <a href='/' target="_blank" rel="noopener noreferrer" className="github-btn">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={handleClosePopup}>X</button>
                        <h2>{selectedProduct.heading}</h2>
                        <p>{selectedProduct.longDescription}</p>
                        <ul>
                            {selectedProduct.keyPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                        <div className="images">
                            {selectedProduct.images.map((image, index) => (
                                <img src={image} alt={selectedProduct.heading} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
