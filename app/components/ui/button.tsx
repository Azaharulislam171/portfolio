"use client";
import React, { useEffect, useRef } from "react";
import { IconArrowDown } from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import { gsap } from "gsap";

export const ButtonsCard = ({
  children,
  className,
  onClick,
  buttonName, // Add buttonName as a prop
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  buttonName: string; // Define the type for buttonName
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      console.log("cardRef.current:", cardRef.current); // Check if the reference is correct
      gsap.fromTo(
        cardRef.current,
        { y: 40 }, // Start state
        { y: 0, rotation: 360, duration: 1, ease: "power3.out" } // End state
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={cn(
        "p-4 w-full bg-white rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
      <IconArrowDown className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
      <div className="relative z-40">{children}</div>
      <span>{buttonName}</span> {/* Display the button name */}
    </div>
  );
};
