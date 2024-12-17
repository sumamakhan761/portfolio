"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

export const InfiniteMovingCards = ({
  item,
  className,
}: {
  item: {
    quote: string;
    name: string;
    title: string;
  };
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-screen flex justify-center items-center py-6 overflow-hidden",
        className
      )}
    >
      {/* Use motion.div for animations */}
      <motion.div
        className="max-w-5xl rounded-2xl border border-b-0 border-slate-800 p-5 md:p-12 sm:text-md"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state
        transition={{ duration: 0.6 }} // Duration of the animation
        whileHover={{
          scale: 1.05, // Slightly scale up on hover
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Hover shadow effect
        }}
      >
        <blockquote>
          <div
            aria-hidden="true"
            className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
          ></div>
          <div className="relative z-20 mb-5 flex items-center">
            <motion.div
              className="me-3"
              whileHover={{ x: 10 }} // Move profile picture to the right on hover
            >
              <img
                src="/me.png"
                alt="profile"
                height={60}
                width={60}
                className="rounded-full"
              />
            </motion.div>
            <span className="flex flex-col gap-1">
              <span className="text-2xl leading-[1.6] text-zinc-400 font-bold">
                {item.name}
              </span>
              <span className="text-xl leading-[1.6] text-white-200 font-normal">
                {item.title}
              </span>
            </span>
          </div>
          <motion.span
            className="relative z-20 text-xl leading-[1.8] text-white font-normal"
            whileHover={{ y: -10 }} // Move quote text upwards on hover
          >
            {item.quote}
          </motion.span>
        </blockquote>
      </motion.div>
    </div>
  );
};
