// AnimatedImage.jsx
"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedImage = ({ src, alt, className }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, rotation: 0, duration: 5, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={className}
      />
    </div>
  );
};

export default AnimatedImage;
