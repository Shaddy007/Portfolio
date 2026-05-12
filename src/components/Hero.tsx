"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Bug,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FolderKanban,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
  "Aspiring SQA Engineer",
  "Manual Testing Specialist",
  "API Testing Learner",
  "Quality-Focused Problem Solver",
];

const dashboardStats = [
  {
    label: "Test Cases",
    value: "125+",
    icon: ClipboardCheck,
    accent: "from-cyan-400 to-sky-500",
  },
  {
    label: "Passed Tests",
    value: "110+",
    icon: CheckCircle2,
    accent: "from-sky-400 to-blue-500",
  },
  {
    label: "Defects Found",
    value: "20+",
    icon: Bug,
    accent: "from-violet-400 to-purple-500",
  },
  {
    label: "QA Projects",
    value: "3+",
    icon: FolderKanban,
    accent: "from-blue-400 to-violet-500",
  },
];

const socialLinks = [
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

const ringGradient =
  "conic-gradient(from 180deg, " +
  "#91d3f7 0%, " +
  "#66c6f5 12%, " +
  "#2cacf0 24%, " +
  "#0f9eea 36%, " +
  "#5566c7 52%, " +
  "#7184d0 64%, " +
  "#8989ff 74%, " +
  "#af42ff 86%, " +
  "#9000f9 94%, " +
  "#91d3f7 100%)";

const glowGradient =
  "radial-gradient(circle at center, rgba(145,211,247,0.24) 0%, rgba(44,172,240,0.18) 32%, rgba(85,102,199,0.14) 55%, rgba(144,0,249,0.12) 78%, transparent 100%)";

function RotatingRoleText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 38 : 82;
    const holdTime = 1300;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === currentRole) {
          setTimeout(() => setIsDeleting(true), holdTime);
        }
      } else {
        const nextText = currentRole.slice(0, displayText.length - 1);
        setDisplayText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.22)]">
      {displayText}
      <span className="ml-1 inline-block h-8 w-[3px] animate-pulse rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.75)]" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full scroll-mt-28 items-center overflow-hidden px-6 pb-24 pt-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-[1650px] items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] xl:gap-20 2xl:max-w-[1720px]">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-300/35 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-600 shadow-[0_14px_40px_rgba(16,185,129,0.12)] backdrop-blur dark:border-emerald-400/20 dark:bg-emerald-400/8 dark:text-emerald-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open to QA Opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
            className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.32em] text-cyan-700 dark:text-cyan-300 sm:text-sm"
          >
            <span className="h-px w-10 bg-cyan-400" />
            Hello there, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="max-w-3xl text-[3.25rem] font-black leading-[0.92] tracking-[-0.07em] text-slate-950 dark:text-white sm:text-6xl md:text-7xl xl:text-[5.7rem]"
          >
            <span className="bg-gradient-to-r from-cyan-100 via-cyan-400 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(14,165,233,0.18)]">
              Shadman
            </span>

            <br />

            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(99,102,241,0.18)]">
              Sadiq
            </span>

            <br />

            <span className="text-slate-950 dark:text-white dark:drop-shadow-[0_0_22px_rgba(255,255,255,0.14)]">
              Chowdhury
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
            className="mt-7 min-h-[42px] text-2xl font-black sm:text-3xl md:min-h-[56px] md:text-4xl"
          >
            <RotatingRoleText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
            className="mt-6 max-w-[40rem] text-base font-semibold leading-8 text-slate-800 dark:font-normal dark:text-slate-300 sm:text-lg"
          >
            I test web applications with a quality-first mindset, validate APIs, design
            clear test cases, and report defects that improve reliability, usability, and
            overall product quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="/cv.pdf"
              download="Shadman_Sadiq_Chowdhury_CV.pdf"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 px-7 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(14,165,233,0.28)] transition-all duration-300"
            >
              <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-violet-500 via-sky-500 to-cyan-500 transition-transform duration-300 group-hover:translate-y-0" />

              <span className="relative flex items-center gap-3">
                Download CV
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/40 bg-white/70 px-7 py-4 text-sm font-black text-cyan-800 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-cyan-500"
            >
              Get in Touch
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48, ease: "easeOut" }}
            className="mt-7 flex items-center gap-3"
          >
            {socialLinks.map((item) => {
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
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/35 bg-white/55 text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-[0_16px_40px_rgba(14,165,233,0.22)] dark:border-cyan-400/20 dark:bg-white/[0.03] dark:text-slate-300"
                  aria-label={item.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT IMAGE + STATS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 34 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          <div className="relative flex min-h-[500px] w-full items-center justify-center max-lg:min-h-[430px]">
            <div className="relative h-[380px] w-[380px] rounded-full sm:h-[430px] sm:w-[430px] xl:h-[500px] xl:w-[500px]">
              {/* Smooth premium glow */}
              <motion.div
                animate={{
                  opacity: [0.38, 0.65, 0.38],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ background: glowGradient }}
                className="absolute inset-[-24px] rounded-full blur-2xl"
              />

              {/* Single smooth premium ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ background: ringGradient }}
                className="absolute inset-0 rounded-full p-[7px] shadow-[0_0_65px_rgba(96,165,250,0.20)]"
              >
                <div className="h-full w-full rounded-full bg-slate-50 dark:bg-[#06101f]" />
              </motion.div>

              {/* Image */}
              <div className="absolute inset-[18px] overflow-hidden rounded-full border border-white/70 bg-gradient-to-br from-cyan-50 via-white to-violet-50 shadow-[inset_0_0_50px_rgba(14,165,233,0.08)] dark:border-white/10 dark:from-[#07111f] dark:via-[#07111f] dark:to-[#151030]">
                <Image
                  src="/profile.png"
                  alt="Shadman Sadiq Chowdhury"
                  fill
                  className="scale-[1.04] object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease: "easeOut" }}
            className="mt-16 grid w-full max-w-[680px] grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-20"
          >
            {dashboardStats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.64 + index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -7, scale: 1.03 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-cyan-300/35 bg-white/60 p-5 text-center shadow-[0_18px_55px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_22px_70px_rgba(14,165,233,0.18)] dark:border-cyan-400/20 dark:bg-white/[0.035]"
                >
                  <div
                    className={`absolute inset-x-8 bottom-0 h-[3px] rounded-t-full bg-gradient-to-r ${item.accent}`}
                  />

                  <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-cyan-500/10 to-violet-500/10 transition-transform duration-300 group-hover:translate-y-0" />

                  <div className="relative mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white dark:text-cyan-300">
                    <Icon size={20} />
                  </div>

                  <p className="relative text-2xl font-black text-slate-950 dark:text-white">
                    {item.value}
                  </p>

                  <p className="relative mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}