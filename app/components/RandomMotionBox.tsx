import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RandomMotionBox = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  // Function to animate each bubble (circle)
  const animateCircle = (circle: HTMLDivElement) => {
    gsap.to(circle, {
      x: gsap.utils.random(-50, 50), // Random horizontal motion
      y: gsap.utils.random(-30, 30), // Random vertical motion
      duration: gsap.utils.random(3, 6), // Random duration
      ease: "power1.inOut",
      repeat: -1, // Infinite repetition
      yoyo: true, // Reverse animation after completion
    });
  };

  useEffect(() => {
    // Animate the logo
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        {
          x: -100, // Start position off-screen
          opacity: 0, // Start invisible
        },
        {
          x: 0, // End position on-screen
          opacity: 1, // Fully visible
          duration: 2, // Duration of the animation
          ease: "power3.out", // Smooth easing
          onComplete: () => {
            gsap.set(logoRef.current, { clearProps: "all" }); // Ensure the image stays in place
          },
        }
      );
    }

    // Animate the bubbles
    circlesRef.current.forEach((circle) => {
      animateCircle(circle);
    });
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div className="relative w-full  h-16  flex items-center justify-between px-8  overflow-hidden">
      {/* Bubbles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) circlesRef.current[i] = el;
          }}
          className="absolute w-8 h-8 rounded-full bg-blue-400 opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}

      {/* Logo */}
      <div ref={logoRef} className="flex items-center">
        <img src="/ai.png" alt="Logo" className="w-16 h-16 " />
      </div>

      {/* Links */}
      <div className="flex space-x-8">
        <a href="#" className="hover:text-blue-400 transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors">
          About
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors">
          Services
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors">
          Contact
        </a>
      </div>
    </div>
  );
};

export default RandomMotionBox;
