import React, { useState, useEffect } from 'react';
import './product.css';

export default function Product() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            icon: <i className=""><img className='all' src="https://s.yimg.com/fz/api/res/1.2/UpZul83UuvKAyH9XFaczXQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEzMDtxPTgwO3c9MTMw/https://s.yimg.com/zb/imgv1/0f0f5a05-3ee9-3b18-a598-0c0b40125d45/t_500x300" alt="" /></i>,
            heading: 'Python',
            description: 'Python is a versatile, high-level programming language known for its readability and wide range of applications.',
            longDescription: 'This is a more detailed description of Product 1. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3', 'Point 1', 'Point 2', 'Point 3', 'Point 1'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://www.python.org/'
        },
        {
            icon: <i className=""><img className='all' src="https://tse4.mm.bing.net/th?id=OIP.IgGMQuHZUFfIHXZZsuo8IwAAAA&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'Django',
            description: 'Django is a high-level Python web framework that simplifies building secure and scalable web applications quickly.',
            longDescription: 'This is a more detailed description of Product 2. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://www.djangoproject.com/'
        },
        {
            icon: <i ><img className='all' src="https://tse3.mm.bing.net/th?id=OIP.0dWKWNi1fvFKL4Zn8YQX_wAAAA&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'FastAPI',
            description: 'FastAPI is a modern, fast web framework for building APIs with Python, known for its performance and ease.',
            longDescription: 'This is a more detailed description of Product 3. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://fastapi.tiangolo.com/'
        },
        {
            icon: <i ><img className='all' src="https://tse1.mm.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'ReactJS',
            description: 'React.js is a JavaScript library for building user interfaces, enabling dynamic web application development.',
            longDescription: 'This is a more detailed description of Product 4. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://reactjs.org/'
        },
        {
            icon: <i ><img className='all' src="https://tse3.mm.bing.net/th?id=OIP.GwTMq4ynTO-HtPpPDKEvxAAAAA&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'MongoDB',
            description: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, offering high performance.',
            longDescription: 'This is a more detailed description of Product 5. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://www.mongodb.com/'
        },
        {
            icon: <i ><img className='all' src="https://tse1.mm.bing.net/th?id=OIP.h3OvPP_jA7WtI16nNENnZQHaHa&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'PostgreSQL',
            description: 'PostgreSQL is a powerful, open-source relational database system known for its robustness and SQL compliance.',
            longDescription: 'This is a more detailed description of Product 6. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://www.postgresql.org/'
        },
        {
            icon: <i ><img className='all' src="https://tse4.mm.bing.net/th?id=OIP.Xj_iGPrHpjNYp6FHOXZOHwHaG4&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'Selenium',
            description: 'Selenium is a tool for automating web browsers, enabling automated testing and interaction with web applications.',
            longDescription: 'This is a more detailed description of Product 7. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://www.selenium.dev/'
        },
        {
            icon: <i ><img className='all' src="https://tse3.mm.bing.net/th?id=OIP.k6OHkGj_o7-Vo2qyoQaPogHaHa&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'Beautiful Soup',
            description: 'Beautiful Soup is a Python library for parsing HTML and XML documents, making web scraping and data extraction easy.',
            longDescription: 'This is a more detailed description of Product 8. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://www.crummy.com/software/BeautifulSoup/'
        },
        {
            icon: <i><img className='all' src="https://tse4.mm.bing.net/th?id=OIP.mzcbieY6QvKTi_ZlgtuBEQAAAA&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'Langchain',
            description: 'LangChain is a framework for developing applications with large language models, focusing on integration and chaining tasks.',
            longDescription: 'This is a more detailed description of Product 9. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://www.langchain.com/'
        },
        {
            icon: <i ><img className='all' src="https://tse2.mm.bing.net/th?id=OIP.bJ2Bw1kBpe5Wiv0fs_SEAgHaHa&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'PyTorch',
            description: 'PyTorch is an open-source machine learning library for Python, known for its dynamic computation graphs and deep learning capabilities.',
            longDescription: 'This is a more detailed description of Product 10. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://pytorch.org/'
        },
        {
            icon: <i><img className='all' src="https://tse1.mm.bing.net/th?id=OIP.dRadnE_mXpYIksb3AMlb4wAAAA&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'OpenCV',
            description: 'OpenCV is an open-source computer vision library that enables image processing, video and machine learning tasks.',
            longDescription: 'This is a more detailed description of Product 11. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://opencv.org/'
        },
        {
            icon: <i ><img className='all' src="https://tse2.mm.bing.net/th?id=OIP.V5xim-_jGpGf7J782TaUYQHaHa&pid=Api&P=0&h=220" alt="" /></i>,
            heading: 'TensorFlow',
            description: 'TensorFlow is an open-source machine learning framework by Google, used for building and deploying deep learning models.',
            longDescription: 'This is a more detailed description of Product 12. It includes more information about the features and benefits.',
            keyPoints: ['Point 1', 'Point 2', 'Point 3'],
            images: ['image1.jpg', 'image2.jpg'],
            website: 'https://www.tensorflow.org/'
        }
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
            <h1 className='sub-title'>Meeting Cutting-Edge Technology Needs.</h1>
            <p className='pra'>Explore the key features of our AI tool, AI startups need to thrive.</p>

            <div className="productDiv">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-icon-wrapper">
                        <h3>{product.heading}</h3>
                            <div className="product-icon">{product.icon}</div>
                        </div>
                        <p>{product.description}</p>
                        <a href={product.website} target="_blank">

                        <button className="see-more-btn" >See More</button>
                        </a>
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
