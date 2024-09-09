import React, { useState, useEffect } from 'react';
import './product.css';

export default function Product() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            icon: <i className=""><img  className='all'  src="https://s.yimg.com/fz/api/res/1.2/UpZul83UuvKAyH9XFaczXQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEzMDtxPTgwO3c9MTMw/https://s.yimg.com/zb/imgv1/0f0f5a05-3ee9-3b18-a598-0c0b40125d45/t_500x300" alt="" /></i>,
            heading: 'Python',
            description: 'Python is a high-level, interpreted programming language It is praised for its clear syntax, readability, and broad versatility.',

            longDescription: ' This is a more detailed description of Product 1. It includes sThis is a more detailed description of Product 1. It includes more information about the features and benefitsThis is a more detailed description of Product 1. It includes more information about the features and benefitsThis is a more detailed description of Product 1. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3','Point 1', 'Point 2', 'Point 3','Point 1'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i className=""><img className='all' src="https://tse4.mm.bing.net/th?id=OIP.IgGMQuHZUFfIHXZZsuo8IwAAAA&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'Django ',
            description: 'Django is a powerful Python web framework that enables rapid development of secure and maintainable websites. ',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i ><img className='all' src="https://tse3.mm.bing.net/th?id=OIP.0dWKWNi1fvFKL4Zn8YQX_wAAAA&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'FastAPI',
            description: 'FastAPI is a modern, high-performance web framework for building APIs with Python. It gives hints for automatic interactive documentation .',

            longDescription: 'This is a more detailed description of Product 3. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i ><img className='all' src="https://tse1.mm.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'ReactJS',
            description: 'ReactJS is a popular JavaScript library for building dynamic and interactive user interfaces. Developed by Facebook, it enables developers to create reusable UI components .',

            longDescription: 'This is a more detailed description of Product 4. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i ><img className='all' src="https://tse3.mm.bing.net/th?id=OIP.GwTMq4ynTO-HtPpPDKEvxAAAAA&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'MongoDB',
            description: 'MongoDB is a NoSQL database designed for high performance and scalability. It stores data in flexible, JSON-like documents, allowing for dynamic schemas and easy integration.',

            longDescription: 'This is a more detailed description of Product 5. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i ><img className='all' src="https://tse1.mm.bing.net/th?id=OIP.h3OvPP_jA7WtI16nNENnZQHaHa&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'PostgreSQL',
            description: 'PostgreSQL is a powerful, open-source relational database management system known for its advanced features and extensibility. It supports complex queries.',

            longDescription: 'This is a more detailed description of Product 6. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i ><img className='all' src="https://tse4.mm.bing.net/th?id=OIP.Xj_iGPrHpjNYp6FHOXZOHwHaG4&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'Selenium',
            description: 'Selenium is an open-source tool for automating web browsers. It allows developers to write scripts in various programming languages to control browser interactions and test web applications..',

            longDescription: 'This is a more detailed description of Product 6. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i ><img className='all' src="https://tse3.mm.bing.net/th?id=OIP.k6OHkGj_o7-Vo2qyoQaPogHaHa&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'Beautiful Soup',
            description: 'Beautiful Soup is a Python library for parsing and extracting data from HTML and XML documents. It simplifies web scraping by providing easy-to-use methods for navigating and searching through the parsed content.',

            longDescription: 'This is a more detailed description of Product 6. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i><img className='all' src="https://tse4.mm.bing.net/th?id=OIP.mzcbieY6QvKTi_ZlgtuBEQAAAA&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'Langchain',
            description: 'LangChain is a framework designed to streamline the development of applications using language models. It provides tools and abstractions for building.',

            longDescription: 'This is a more detailed description of Product 6. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i ><img className='all' src="https://tse2.mm.bing.net/th?id=OIP.bJ2Bw1kBpe5Wiv0fs_SEAgHaHa&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'PyTorch',
            description: 'PyTorch is an open-source machine learning library for Python that offers dynamic computational graphs and seamless integration with GPU acceleration. .',

            longDescription: 'This is a more detailed description of Product 6. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i><img className='all' src="https://tse1.mm.bing.net/th?id=OIP.dRadnE_mXpYIksb3AMlb4wAAAA&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'OpenCV',
            description: 'OpenCV is an open-source library for computer vision and image processing. It provides a vast array of tools for tasks such as image and video analysis.',

            longDescription: 'This is a more detailed description of Product 6. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i ><img className='all' src="https://tse2.mm.bing.net/th?id=OIP.V5xim-_jGpGf7J782TaUYQHaHa&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'TensorFlow',
            description: 'TensorFlow is an open-source machine learning framework developed by Google for building and deploying deep learning models. .',

            longDescription: 'This is a more detailed description of Product 6. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },


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
        <div className="product-container">
            <h1 className='sub-title'>A Complete Solution for AI SaaS Startups</h1>
            <p className='pra'>Explore the key features of our AI tool,  AI SaaS startups need to thrive.</p>

            <div className="productDiv">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="icon-wrapper">
                            <div className="overlay"></div>
                            <div className="icon">{product.icon}</div>
                        </div>
                        <h3>{product.heading}</h3>
                        <p>{product.description}</p>
                        <button className="see-more-btn" onClick={() => handleSeeMore(product)}>See More</button>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div className="popup-overlay " onClick={handleClosePopup}>
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
