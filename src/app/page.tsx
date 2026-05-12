"use client";

import Image from "next/image";
import About from "@/components/About";
import Contact from "@/components/Contact";
import GlobalBackground from "@/components/GlobalBackground";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const footerLinks = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shadmanchowdhurry/",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Shaddy007",
    icon: FaGithub,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:shadmansadiq230@gmail.com",
    icon: Mail,
    external: false,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 dark:bg-[#030817] dark:text-white">
      <Navbar />
      <GlobalBackground />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>

      <footer className="relative z-20 overflow-hidden border-t border-cyan-400/15 bg-white/70 backdrop-blur-2xl dark:bg-[#030817]/82">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.08),transparent_38%,rgba(139,92,246,0.08))] dark:bg-[linear-gradient(120deg,rgba(34,211,238,0.04),transparent_40%,rgba(139,92,246,0.06))]" />
          <div className="absolute -left-32 -top-28 h-72 w-72 rounded-full bg-cyan-400/14 blur-[110px] dark:bg-cyan-500/8" />
          <div className="absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-violet-500/14 blur-[120px] dark:bg-violet-600/10" />
        </div>

        <div className="relative mx-auto max-w-[1380px] px-8 py-10 max-md:px-5">
          <div className="rounded-[2rem] border border-cyan-300/25 bg-white/38 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-cyan-400/12 dark:bg-white/[0.025] dark:shadow-[0_24px_90px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <motion.a
                href="#home"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-fit items-center gap-4"
              >
                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/25 bg-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition duration-300 group-hover:border-cyan-300/70 group-hover:shadow-[0_0_45px_rgba(139,92,246,0.35)]">
                  <Image
                    src={`${basePath}/sc-logo.png`}
                    alt="SC logo"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

                <div>
                  <p className="font-black tracking-[-0.02em] text-slate-950 transition duration-300 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300">
                    Shadman Sadiq Chowdhury
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                    Aspiring Software Quality Assurance Engineer
                  </p>
                </div>
              </motion.a>

              <nav className="flex flex-wrap items-center gap-5 text-sm font-semibold text-slate-500 dark:text-slate-400">
                {footerLinks.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="group relative transition duration-300 hover:text-cyan-600 dark:hover:text-cyan-300"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 h-px w-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -4, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-cyan-400/25 bg-white/55 text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] dark:bg-white/[0.035] dark:text-slate-300"
                      aria-label={item.label}
                    >
                      <span className="absolute inset-0 translate-y-full bg-gradient-to-br from-cyan-500 to-violet-500 transition-transform duration-300 group-hover:translate-y-0" />
                      <Icon className="relative z-10" size={19} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-cyan-400/12 pt-6 text-sm text-slate-500 dark:text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Shadman Sadiq Chowdhury. All rights reserved.</p>

              <p className="flex flex-wrap items-center gap-1">
                Built with{" "}
                <span className="font-semibold text-slate-600 dark:text-slate-400">
                  Next.js
                </span>
                ,
                <span className="font-semibold text-slate-600 dark:text-slate-400">
                  TypeScript
                </span>
                ,
                <span className="font-semibold text-slate-600 dark:text-slate-400">
                  Tailwind CSS
                </span>
                , and
                <span className="font-semibold text-slate-600 dark:text-slate-400">
                  Framer Motion
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}