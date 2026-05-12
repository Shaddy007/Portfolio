"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bug,
  CheckCircle2,
  Download,
  FolderKanban,
  Mail,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const stats = [
  {
    value: "125+",
    label: "Test Cases",
    icon: ShieldCheck,
    line: "from-cyan-400 to-sky-500",
  },
  {
    value: "110+",
    label: "Passed Tests",
    icon: CheckCircle2,
    line: "from-cyan-400 to-blue-500",
  },
  {
    value: "20+",
    label: "Defects Found",
    icon: Bug,
    line: "from-cyan-400 to-violet-500",
  },
  {
    value: "3+",
    label: "QA Projects",
    icon: FolderKanban,
    line: "from-cyan-400 to-purple-500",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Shaddy007",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shadmanchowdhurry/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:shadmansadiq230@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:01339810281",
    icon: Phone,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative flex min-h-screen items-center scroll-mt-28 pt-28"
    >
      <div className="section-wrap w-full">
        <div className="grid items-center gap-20 lg:grid-cols-[0.92fr_1.08fr]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-emerald-500 shadow-[0_0_35px_rgba(16,185,129,0.12)] backdrop-blur-xl dark:text-emerald-300"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              Open to QA Opportunities
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
              className="mb-5 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-cyan-400" />
              <p className="section-kicker">Hello there, I&apos;m</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="glow-text max-w-3xl text-[4.2rem] font-black leading-[0.92] tracking-[-0.07em] md:text-[5.8rem] lg:text-[6.5rem]"
            >
              <span className="gradient-text block">Shadman</span>
              <span className="gradient-text block">Sadiq</span>
              <span className="block text-slate-950 dark:text-white">
                Chowdhury
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
              className="mt-7 min-h-[42px] text-3xl font-black tracking-[-0.04em] md:text-4xl"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    "Aspiring SQA Engineer",
                    1600,
                    "Manual Testing Enthusiast",
                    1600,
                    "API Testing Learner",
                    1600,
                    "Quality-Focused Problem Solver",
                    1600,
                  ]}
                  wrapper="span"
                  speed={42}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
              className="mt-8 max-w-2xl text-base font-medium leading-8 text-slate-800 dark:text-slate-200 md:text-lg"
            >
              I test web applications with a quality-first mindset, validate
              APIs, design clear test cases, and report defects that improve
              reliability, usability, and overall product quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href={`${basePath}/cv.pdf`}
                download="Shadman_Sadiq_Chowdhury_CV.pdf"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 px-7 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(14,165,233,0.28)] transition-all duration-300"
              >
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-violet-500 via-sky-500 to-cyan-500 transition-transform duration-300 group-hover:translate-y-0" />

                <span className="relative flex items-center gap-3">
                  Download CV
                  <Download className="h-4 w-4" />
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/40 bg-white/60 px-7 py-4 text-sm font-black text-cyan-800 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-cyan-500"
              >
                Get in Touch
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62, ease: "easeOut" }}
              className="mt-7 flex items-center gap-3"
            >
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === "GitHub" || item.label === "LinkedIn"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.label === "GitHub" || item.label === "LinkedIn"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ y: -4, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/25 bg-white/50 text-slate-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] dark:bg-white/[0.035] dark:text-slate-300"
                    aria-label={item.label}
                  >
                    <span className="absolute inset-0 translate-y-full bg-gradient-to-br from-cyan-500 to-violet-500 transition-transform duration-300 group-hover:translate-y-0" />
                    <Icon className="relative z-10" size={18} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 34 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Profile image circle */}
            <div className="relative h-[420px] w-[420px] md:h-[500px] md:w-[500px]">
              {/* Animated outer neon ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full p-[7px]"
                style={{
                  background:
                    "conic-gradient(from 0deg, #22d3ee, #0ea5e9, #3b82f6, #8b5cf6, #a855f7, #22d3ee)",
                  boxShadow:
                    "0 0 48px rgba(34,211,238,0.22), 0 0 90px rgba(139,92,246,0.18)",
                }}
              />

              {/* Soft pulse glow */}
              <motion.div
                animate={{
                  opacity: [0.45, 0.75, 0.45],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.20),transparent_58%)] blur-2xl"
              />

              {/* Main photo holder */}
              <div className="absolute inset-[10px] overflow-hidden rounded-full border border-cyan-300/20 bg-[#071322] shadow-[inset_0_0_60px_rgba(34,211,238,0.08)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(34,211,238,0.10),transparent_38%),linear-gradient(145deg,rgba(8,24,42,0.95),rgba(5,12,28,0.98))]" />

                <Image
                  src={`${basePath}/profile.png`}
                  alt="Shadman Sadiq Chowdhury"
                  fill
                  priority
                  sizes="500px"
                  className="relative z-10 scale-[1.03] object-contain object-bottom"
                />
              </div>

              {/* Inner premium ring */}
              <div className="pointer-events-none absolute inset-[22px] rounded-full border border-white/10" />
              <div className="pointer-events-none absolute inset-[34px] rounded-full border border-cyan-300/10" />
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55, ease: "easeOut" }}
              className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-5 md:grid-cols-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.65 + index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.18, ease: "easeOut" },
                    }}
                    className="group relative overflow-hidden rounded-[1.6rem] border border-cyan-400/22 bg-white/55 p-5 text-center shadow-[0_24px_70px_rgba(15,23,42,0.09)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/55 hover:shadow-[0_28px_90px_rgba(14,165,233,0.14)] dark:bg-white/[0.035]"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-500 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white dark:text-cyan-300">
                      <Icon size={21} />
                    </div>

                    <p className="text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>

                    <div
                      className={`absolute bottom-0 left-1/2 h-[3px] w-16 -translate-x-1/2 rounded-full bg-gradient-to-r ${stat.line} transition-all duration-300 group-hover:w-24`}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}