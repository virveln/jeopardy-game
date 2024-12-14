import '../styles/starTrail.css';
import React, { useState, useEffect } from 'react';

export default function StarTrail() {
  const [stars, setStars] = useState([]);

  const handleMouseMove = (e) => {
    const size = Math.random() * 7 + 1;

    // const newStar = {
    //   id: Date.now(), 
    //   x: e.clientX,
    //   y: e.clientY,
    //   size: size,
    // };

    const offset = 20;
    const newStar = {
      id: Date.now(),
      x: e.clientX + (Math.random() - 0.5) * offset,
      y: e.clientY + (Math.random() - 0.5) * offset,
      size: size,
    };

    setStars((prev) => [...prev, newStar]);

    // Clear start after 1 sec
    setTimeout(() => {
      setStars((prev) => prev.filter((star) => star.id !== newStar.id));
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {stars.map((star) => (
        <div
        key={star.id}
        className="star"
        style={{
          left: `${star.x}px`,
          top: `${star.y}px`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          transform: `translate(-50%, -50%) scale(${star.size / 30})`,
          }}
        ></div>
      ))}
    </div>
  );
}
