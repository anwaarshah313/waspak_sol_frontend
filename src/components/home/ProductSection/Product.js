import React, { useState, useEffect } from 'react';
import './product.css';

export default function Product() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            icon: <i className="bi bi-bricks"></i>,
            heading: 'Product 1',
            description: 'This is a description of product 2. This is a description of product 2.This is a description.',

            longDescription: ' This is a more detailed description of Product 1. It includes sThis is a more detailed description of Product 1. It includes more information about the features and benefitsThis is a more detailed description of Product 1. It includes more information about the features and benefitsThis is a more detailed description of Product 1. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3','Point 1', 'Point 2', 'Point 3','Point 1'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i className="bi bi-bricks"></i>,
            heading: 'Product 2',
            description: 'This is a description of product 2. This is a description of product 2.This is a description.',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i className="bi bi-bricks"></i>,
            heading: 'Product 3',
            description: 'This is a description of product 2. This is a description of product 2.This is a description.',

            longDescription: 'This is a more detailed description of Product 3. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i className="bi bi-bricks"></i>,
            heading: 'Product 4',
            description: 'This is a description of product 2. This is a description of product 2.This is a description.',

            longDescription: 'This is a more detailed description of Product 4. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i className="bi bi-bricks"></i>,
            heading: 'Product 5',
            description: 'This is a description of product 2. This is a description of product 2.This is a description.',

            longDescription: 'This is a more detailed description of Product 5. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg']
        },
        {
            icon: <i className="bi bi-bricks"></i>,
            heading: 'Product 6',
            description: 'This is a description of product 2. This is a description of product 2.This is a description.',

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
