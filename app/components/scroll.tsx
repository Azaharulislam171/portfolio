'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxImage = ({ src, alt }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -400, // Move the image upwards
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom', // Start when the top of the image hits the bottom of the viewport
          end: 'bottom top', // End when the bottom of the image hits the top of the viewport
          scrub: true // Smoothly animate the effect
        }
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-auto object-cover absolute top-0 left-0"
      />
    </div>
  );
};

export default ParallaxImage;