import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from 'next/image'; // Import the Image component from next/image

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
    <div className="relative w-full  flex justify-center items-center  p-4  overflow-hidden mb-8">
      {/* Bubbles */}
      {[...Array(7)].map((_, i) => (
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

      {/* Logo */}
      <div ref={logoRef} className="flex items-start">
        <Image src="/ai.png" alt="Description" width={500} height={300} /> {/* Use the Image component */}
      </div>

      {/* Links */}
      <div className="flex space-x-8">
        <Link href="/" className=" text-sm hover:text-blue-400 transition-colors">
          Home
        </Link>
        <Link href="/resume" className=" text-sm hover:text-blue-400 transition-colors">
          Resume
        </Link>
        <Link href="/projects" className="hover:text-blue-400 transition-colors">
          Projects
        </Link>
        <Link href="/courses" className="hover:text-blue-400 transition-colors">
          Courses
        </Link>
        <Link href="/student_corner" className="hover:text-blue-400 transition-colors">
          Student Corner
        </Link>
      </div>
    </div>
  );
};

export default RandomMotionBox;
