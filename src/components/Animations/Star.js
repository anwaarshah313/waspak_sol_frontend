import React, { useState, useEffect } from 'react';
import './star.css';

const generateStars = (count) => {
  return Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className="star"
      style={{
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 10}s`,
      }}
    />
  ));
};

const Star = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setIsAnimating(true);
      }, 1); // Small delay to allow the animation to restart
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [isAnimating]);

  return (
    <div className={`stars-container ${isAnimating ? 'animate' : 'paused'}`}>
      {generateStars(3)}
    </div>
  );
};

export default Star;
