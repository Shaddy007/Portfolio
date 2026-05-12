"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function GlobalBackground() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const getTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme === "light" ? "light" : "dark");
    };

    getTheme();

    const observer = new MutationObserver(getTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    window.addEventListener("portfolio-theme-change", getTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener("portfolio-theme-change", getTheme);
    };
  }, []);

  const isLight = theme === "light";

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${
        isLight ? "bg-[#eef8ff]" : "bg-[#030817]"
      }`}
    >
      {/* Base gradient */}
      <div
        className={`absolute inset-0 ${
          isLight
            ? "bg-[radial-gradient(circle_at_12%_16%,rgba(14,165,233,0.24),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(139,92,246,0.16),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(56,189,248,0.14),transparent_38%),linear-gradient(135deg,#eaf8ff_0%,#f2fbff_44%,#f3f0ff_100%)]"
            : "bg-[radial-gradient(circle_at_15%_12%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_50%_92%,rgba(217,70,239,0.09),transparent_34%)]"
        }`}
      />

      {/* Animated large glows */}
      <motion.div
        animate={{
          x: [0, 30, -15, 0],
          y: [0, 20, -10, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute left-[-240px] top-[-160px] h-[680px] w-[680px] rounded-full blur-[165px] ${
          isLight ? "bg-cyan-300/35" : "bg-cyan-500/12"
        }`}
      />

      <motion.div
        animate={{
          x: [0, -35, 20, 0],
          y: [0, 25, -15, 0],
          scale: [1, 1.06, 0.98, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute right-[-260px] top-[120px] h-[760px] w-[760px] rounded-full blur-[180px] ${
          isLight ? "bg-violet-300/35" : "bg-violet-600/15"
        }`}
      />

      <motion.div
        animate={{
          x: [0, 22, -22, 0],
          y: [0, -18, 16, 0],
          scale: [1, 1.04, 0.98, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-[-300px] left-1/2 h-[620px] w-[900px] -translate-x-1/2 rounded-full blur-[180px] ${
          isLight ? "bg-fuchsia-300/22" : "bg-fuchsia-500/8"
        }`}
      />

      {/* Contrast overlay */}
      <div
        className={`absolute inset-0 ${
          isLight
            ? "bg-[linear-gradient(180deg,rgba(238,248,255,0.20),rgba(230,244,255,0.55))]"
            : "bg-[linear-gradient(180deg,rgba(3,8,23,0.16),rgba(3,8,23,0.58))]"
        }`}
      />

      {/* Left neon wave */}
      <motion.svg
        animate={{
          x: [0, 24, -10, 0],
          y: [0, -10, 12, 0],
          opacity: isLight
            ? [0.34, 0.58, 0.38, 0.34]
            : [0.42, 0.68, 0.48, 0.42],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-80px] top-[12%] h-[650px] w-[920px]"
        viewBox="0 0 920 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="lineGlowLeft">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <motion.path
          animate={{ pathLength: [0.35, 1, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          d="M-40 270C130 165 250 370 430 265C585 175 650 115 920 190"
          stroke="url(#globalLineA)"
          strokeWidth="2.2"
          strokeLinecap="round"
          filter="url(#lineGlowLeft)"
        />

        <motion.path
          animate={{ pathLength: [0.25, 1, 0.25] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          d="M0 405C165 290 315 455 490 355C635 272 730 270 920 330"
          stroke="url(#globalLineB)"
          strokeWidth="1.9"
          strokeLinecap="round"
          filter="url(#lineGlowLeft)"
        />

        <motion.path
          animate={{ pathLength: [0.3, 1, 0.3] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          d="M55 535C230 390 370 560 535 455C685 360 780 385 920 430"
          stroke="url(#globalLineC)"
          strokeWidth="1.6"
          strokeLinecap="round"
          filter="url(#lineGlowLeft)"
        />

        <motion.circle
          animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.55, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          cx="190"
          cy="210"
          r="4.5"
          fill="#06B6D4"
          filter="url(#lineGlowLeft)"
        />

        <motion.circle
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.45, 1] }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          cx="430"
          cy="265"
          r="3.8"
          fill="#8B5CF6"
          filter="url(#lineGlowLeft)"
        />

        <motion.circle
          animate={{ opacity: [0.25, 0.95, 0.25], scale: [1, 1.5, 1] }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.1,
          }}
          cx="640"
          cy="275"
          r="4"
          fill="#06B6D4"
          filter="url(#lineGlowLeft)"
        />

        <motion.circle
          animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.4, 1] }}
          transition={{
            duration: 4.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.6,
          }}
          cx="700"
          cy="170"
          r="4"
          fill="#8B5CF6"
          filter="url(#lineGlowLeft)"
        />

        <defs>
          <linearGradient id="globalLineA" x1="0" y1="0" x2="920" y2="0">
            <stop stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="0.25" stopColor="#06B6D4" stopOpacity="1" />
            <stop offset="0.62" stopColor="#0EA5E9" stopOpacity="0.95" />
            <stop offset="0.84" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="globalLineB" x1="0" y1="0" x2="920" y2="0">
            <stop stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="0.3" stopColor="#22D3EE" stopOpacity="0.95" />
            <stop offset="0.7" stopColor="#A855F7" stopOpacity="0.85" />
            <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="globalLineC" x1="0" y1="0" x2="920" y2="0">
            <stop stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="0.35" stopColor="#06B6D4" stopOpacity="0.78" />
            <stop offset="0.78" stopColor="#9333EA" stopOpacity="0.78" />
            <stop offset="1" stopColor="#9333EA" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Right neon wave */}
      <motion.svg
        animate={{
          x: [0, -18, 12, 0],
          y: [0, 10, -10, 0],
          opacity: isLight
            ? [0.28, 0.48, 0.32, 0.28]
            : [0.36, 0.62, 0.42, 0.36],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[4%] right-[-120px] hidden h-[500px] w-[800px] xl:block"
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="lineGlowRight">
          <feGaussianBlur stdDeviation="3.2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <motion.path
          animate={{ pathLength: [0.3, 1, 0.3] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          d="M840 285C670 188 585 390 430 315C295 250 210 205 20 235"
          stroke="url(#globalLineD)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#lineGlowRight)"
        />

        <motion.path
          animate={{ pathLength: [0.25, 1, 0.25] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
          d="M820 365C665 285 520 405 365 345C240 298 140 250 0 270"
          stroke="url(#globalLineE)"
          strokeWidth="1.65"
          strokeLinecap="round"
          filter="url(#lineGlowRight)"
        />

        <motion.circle
          animate={{ opacity: [0.25, 0.95, 0.25], scale: [1, 1.5, 1] }}
          transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}
          cx="600"
          cy="225"
          r="4"
          fill="#06B6D4"
          filter="url(#lineGlowRight)"
        />

        <motion.circle
          animate={{ opacity: [0.25, 0.95, 0.25], scale: [1, 1.45, 1] }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
          cx="430"
          cy="315"
          r="3.7"
          fill="#8B5CF6"
          filter="url(#lineGlowRight)"
        />

        <defs>
          <linearGradient id="globalLineD" x1="800" y1="0" x2="0" y2="0">
            <stop stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="0.28" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="0.7" stopColor="#06B6D4" stopOpacity="0.9" />
            <stop offset="1" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="globalLineE" x1="800" y1="0" x2="0" y2="0">
            <stop stopColor="#A855F7" stopOpacity="0" />
            <stop offset="0.42" stopColor="#C084FC" stopOpacity="0.78" />
            <stop offset="0.82" stopColor="#06B6D4" stopOpacity="0.78" />
            <stop offset="1" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Orbit circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className={`absolute right-[4%] top-[15%] hidden h-[360px] w-[360px] rounded-full border xl:block ${
          isLight ? "border-cyan-500/18" : "border-cyan-400/14"
        }`}
      >
        <div
          className={`absolute left-[22%] top-[7%] h-3 w-3 rounded-full ${
            isLight
              ? "bg-violet-500 shadow-[0_0_24px_rgba(139,92,246,0.9)]"
              : "bg-violet-300 shadow-[0_0_24px_rgba(216,180,254,0.95)]"
          }`}
        />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        className={`absolute right-[7%] top-[20%] hidden h-[255px] w-[255px] rounded-full border xl:block ${
          isLight ? "border-violet-500/18" : "border-violet-400/14"
        }`}
      >
        <div
          className={`absolute bottom-[12%] right-[18%] h-2 w-2 rounded-full ${
            isLight
              ? "bg-cyan-500 shadow-[0_0_18px_rgba(6,182,212,0.9)]"
              : "bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
          }`}
        />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className={`absolute left-[-70px] bottom-[10%] hidden h-[230px] w-[230px] rounded-full border xl:block ${
          isLight ? "border-cyan-500/16" : "border-cyan-400/12"
        }`}
      >
        <div
          className={`absolute right-[12%] top-[36%] h-2.5 w-2.5 rounded-full ${
            isLight
              ? "bg-cyan-500 shadow-[0_0_18px_rgba(6,182,212,0.9)]"
              : "bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
          }`}
        />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
        className={`absolute left-8 bottom-[14%] hidden h-[150px] w-[150px] rounded-full border xl:block ${
          isLight ? "border-violet-500/16" : "border-violet-400/12"
        }`}
      />

      {/* Floating dots */}
      {[
        "left-[8%] top-[22%]",
        "left-[17%] top-[55%]",
        "right-[12%] top-[32%]",
        "right-[22%] bottom-[18%]",
        "left-[3%] bottom-[24%]",
      ].map((position, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -14, 10, 0],
            opacity: [0.35, 1, 0.45, 0.35],
            scale: [1, 1.35, 0.95, 1],
          }}
          transition={{
            duration: 4.5 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.45,
          }}
          className={`absolute h-2 w-2 rounded-full ${position} ${
            index % 2 === 0
              ? "bg-cyan-500 shadow-[0_0_18px_rgba(6,182,212,0.95)]"
              : "bg-violet-500 shadow-[0_0_18px_rgba(139,92,246,0.9)]"
          }`}
        />
      ))}
    </div>
  );
}