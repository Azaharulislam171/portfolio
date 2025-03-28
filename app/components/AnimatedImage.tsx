// AnimatedImage.jsx
"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className }) => {
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
      <Image
        width={500}
        height={500}
        ref={imageRef}
        src={src}
        alt={alt}
        className={className}
      />
    </div>
  );
};

export default AnimatedImage;
