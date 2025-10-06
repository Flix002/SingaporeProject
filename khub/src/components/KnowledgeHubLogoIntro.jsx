import React from "react";
import { motion } from "framer-motion";

export default function KnowledgeHubLogoIntro() {
  // Sparkle positions (relative to logo area)
  const sparkles = [
    { top: "30%", left: "65%", size: "w-6 h-6", delay: 0 }, // main sparkle at K tip
    { top: "20%", left: "50%", size: "w-3 h-3", delay: 1 },
    { top: "45%", left: "70%", size: "w-2 h-2", delay: 2.3 },
    { top: "55%", left: "40%", size: "w-2.5 h-2.5", delay: 3.1 },
    { top: "35%", left: "80%", size: "w-2 h-2", delay: 4 },
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-[#0a2540] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[85%] h-[65%] bg-gradient-to-r from-[#2a4e87] via-[#5b7da8] to-[#2a4e87] opacity-30 blur-3xl rounded-full" />
      </div>

      {/* Logo container */}
      <div className="relative flex items-center space-x-3">
        {/* Animated Brush Stroke "K" */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-28 h-28 relative"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.path
            d="M40 20 L40 180 M40 100 L160 20 M40 100 L160 180"
            stroke="url(#paint0)"
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
          />
          <defs>
            <linearGradient id="paint0" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#0f2b5b" />
              <stop offset="100%" stopColor="#5b7da8" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Sparkles */}
        {sparkles.map((s, i) => (
          <motion.div
            key={i}
            className={`absolute ${s.size} bg-white rounded-full blur-sm shadow-[0_0_20px_#ffffff]`}
            style={{ top: s.top, left: s.left }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
            transition={{
              duration: 2,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Text Part */}
        <div className="flex flex-col">
          {/* "nowledge" */}
          <motion.span
            className="text-5xl font-semibold text-white tracking-wide"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            nowledge
          </motion.span>

          {/* Glowing "Hub" */}
          <motion.div
            className="bg-[#1c3c7a] px-4 py-1 inline-block rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <motion.span
              className="text-white font-bold text-2xl"
              animate={{
                textShadow: [
                  "0 0 5px #5b7da8",
                  "0 0 15px #5b7da8",
                  "0 0 5px #5b7da8",
                ],
                boxShadow: [
                  "0 0 5px #5b7da8",
                  "0 0 20px #5b7da8",
                  "0 0 5px #5b7da8",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Hub
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
