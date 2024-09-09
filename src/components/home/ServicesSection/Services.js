import React, { useState, useEffect } from 'react';
import './services.css';

export default function Services() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            heading: 'Product 1',
            description: 'This is a description of product 1. This is a description of product 1. This is a description.',
            longDescription: 'This is a more detailed description of Product 1. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            githubLink: 'https://github.com/product1',
        },
        {
            heading: 'Product 2',
            description: 'This is a description of product 2. This is a description of product 2. This is a description.',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            githubLink: 'https://github.com/product2',
        },
        {
            heading: 'Product 2',
            description: 'This is a description of product 2. This is a description of product 2. This is a description.',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            githubLink: 'https://github.com/product2',
        },
        {
            heading: 'Product 2',
            description: 'This is a description of product 2. This is a description of product 2. This is a description.',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            githubLink: 'https://github.com/product2',
        },
        {
            heading: 'Product 2',
            description: 'This is a description of product 2. This is a description of product 2. This is a description.',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            githubLink: 'https://github.com/product2',
        },
        {
            heading: 'Product 2',
            description: 'This is a description of product 2. This is a description of product 2. This is a description.',
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
                        <button className="see-more-btn" onClick={() => handleSeeMore(product)}>See More</button>
                        <a href={product.githubLink} target="_blank" rel="noopener noreferrer" className="github-btn">GitHub</a>
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
