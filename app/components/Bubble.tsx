import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface BubbleProps {
  text: string; // Add a prop type for the text
}

const Bubble: React.FC<BubbleProps> = ({ text }) => {
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
    

    // Animate the bubbles
    circlesRef.current.forEach((circle) => {
      animateCircle(circle);
    });
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div className="relative w-full flex  items-center overflow-hidden ">
      {/* Bubbles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) circlesRef.current[i] = el;
          }}
          className="absolute w-4 h-4 rounded-full bg-cyan-500 opacity-20 shadow-lg shadow-teal-400"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}

      

      {/* Dynamic Text */}
      <div className="text-3xl md:text-5xl md:py-20 font-bold py-1">
        {text}
      </div>
    </div>
  );
};

export default Bubble;
