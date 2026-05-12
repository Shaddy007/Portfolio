"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  FileText,
  Layers3,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrainFront,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "OrangeHRM",
    subtitle: "Multi-Module QA Testing",
    description:
      "Performed end-to-end manual testing on HR management modules including Login, PIM, Leave, Recruitment, and Admin workflows.",
    icon: ShieldCheck,
    category: "QA Project",
    github: "https://github.com/Shaddy007/OrangeHrm-Testing",
    points: [
      "Designed and executed 125+ test cases",
      "Identified 20+ functional defects",
      "Prepared structured bug reports with severity and priority",
    ],
    tools: ["Manual Testing", "Test Cases", "Bug Reporting", "JIRA"],
    accent: "from-cyan-400 via-sky-500 to-blue-600",
    glow: "bg-cyan-400",
    visualTitle: "HR Workflow QA",
    visualMeta: "Login · PIM · Leave · Admin",
  },
  {
    title: "Evershop",
    subtitle: "E-commerce Platform Testing",
    description:
      "Tested an e-commerce platform covering product search, cart, checkout, account flow, API responses, and order management.",
    icon: ShoppingCart,
    category: "QA Project",
    github: "https://github.com/Shaddy007/Ecommerce-Search-Testing",
    points: [
      "Validated complete user purchase journey",
      "Tested API responses using Postman",
      "Reported search and cart workflow issues",
    ],
    tools: ["API Testing", "Postman", "SQL", "UI Testing"],
    accent: "from-sky-400 via-blue-500 to-violet-600",
    glow: "bg-blue-400",
    visualTitle: "E-commerce Flow",
    visualMeta: "Search · Cart · Checkout · API",
  },
  {
    title: "Railway E-Service",
    subtitle: "Frontend Testing",
    description:
      "Validated railway ticket booking frontend covering train search, seat selection, payment options, schedules, and dashboard flows.",
    icon: TrainFront,
    category: "QA Project",
    github: "https://github.com/Shaddy007/Railway-E-Service",
    points: [
      "Performed UI and user flow testing",
      "Validated booking and seat selection workflow",
      "Collaborated with developers to improve quality",
    ],
    tools: ["Frontend Testing", "SQL Validation", "Bug Tracking", "React"],
    accent: "from-blue-400 via-indigo-500 to-purple-600",
    glow: "bg-violet-400",
    visualTitle: "Booking Frontend",
    visualMeta: "Search · Seats · Payment · Dashboard",
  },
];

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardFade: Variants = {
  hidden: { opacity: 0, y: 42, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-28 pt-16">
      <div className="section-wrap section-space">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <p className="section-kicker">Selected Work</p>
            </div>

            <h2 className="glow-text text-4xl font-black tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Featured{" "}
              <span className="gradient-text relative inline-block">
                QA Projects
                <span className="absolute -bottom-2 left-1 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
              Practical testing projects focused on test case design, defect
              reporting, API validation, UI testing, and end-to-end quality
              assurance.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex w-fit items-center justify-center gap-3 overflow-hidden rounded-2xl border border-cyan-400/40 bg-white/70 px-7 py-4 text-sm font-black text-cyan-800 shadow-[0_18px_50px_rgba(14,165,233,0.16)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:text-white dark:bg-white/5 dark:text-cyan-100"
          >
            <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:translate-y-0" />
            Discuss Opportunity
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-7 lg:grid-cols-3"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={cardFade}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.22, ease: "easeOut" },
                }}
                className="group relative flex min-h-[540px] flex-col overflow-hidden rounded-[2rem] border border-cyan-300/40 bg-white/60 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_34px_110px_rgba(14,165,233,0.22)] dark:border-cyan-400/20 dark:bg-[#06101f]/75 dark:shadow-[0_24px_90px_rgba(0,0,0,0.35)] dark:hover:border-cyan-300/50"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-[-2px] rounded-[2rem] bg-gradient-to-br from-cyan-400/35 via-transparent to-violet-500/35 blur-md" />
                </div>

                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
                  <motion.div
                    animate={{
                      x: [0, 28, 0],
                      y: [0, -22, 0],
                      scale: [1, 1.12, 1],
                    }}
                    transition={{
                      duration: 7 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -right-20 -top-20 h-52 w-52 rounded-full ${project.glow} opacity-0 blur-[90px] transition-opacity duration-300 group-hover:opacity-25`}
                  />

                  <motion.div
                    animate={{
                      x: [0, -24, 0],
                      y: [0, 24, 0],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 8 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-violet-500 opacity-0 blur-[100px] transition-opacity duration-300 group-hover:opacity-20"
                  />
                </div>

                {/* Premium top visual */}
                <div className="relative mb-6 overflow-hidden rounded-[1.6rem] border border-cyan-300/30 bg-gradient-to-br from-cyan-50 via-white to-violet-50 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] dark:border-white/10 dark:from-cyan-500/10 dark:via-white/[0.03] dark:to-violet-500/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.20),transparent_38%)]" />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -right-20 -top-20 h-40 w-40 rounded-full border border-cyan-300/25 dark:border-cyan-300/10"
                  />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full border border-violet-300/20 dark:border-violet-300/10"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <motion.div
                      whileHover={{ rotate: -6, scale: 1.08 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} shadow-[0_16px_40px_rgba(14,165,233,0.25)]`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>

                    <span className="rounded-full border border-cyan-400/40 bg-cyan-50 px-4 py-1.5 text-xs font-black text-cyan-600 shadow-sm dark:bg-cyan-400/10 dark:text-cyan-300">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
                          Project Scope
                        </p>

                        <p className="mt-1 text-lg font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                          {project.visualTitle}
                        </p>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/40 bg-white/60 text-cyan-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-300">
                        <Layers3 size={20} />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-cyan-200/60 bg-white/60 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
                        <div className="h-2 w-24 rounded-full bg-cyan-300/70 dark:bg-cyan-300/25" />
                        <div className="h-2 w-12 rounded-full bg-violet-300/60 dark:bg-violet-300/20" />
                      </div>

                      <div className="space-y-2.5">
                        {[0, 1, 2].map((line) => (
                          <div
                            key={line}
                            className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10"
                          >
                            <motion.div
                              animate={{ x: ["-120%", "135%"] }}
                              transition={{
                                duration: 2.1,
                                delay: line * 0.35,
                                repeat: Infinity,
                                repeatDelay: 2.2,
                                ease: "easeInOut",
                              }}
                              className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"
                            />
                          </div>
                        ))}
                      </div>

                      <p className="mt-4 text-xs font-bold text-slate-500 dark:text-slate-400">
                        {project.visualMeta}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col">
                  <div className="mb-1 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-500 dark:text-cyan-300" />
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-500/80 dark:text-cyan-300/80">
                      Case Study
                    </p>
                  </div>

                  <h3 className="card-title text-2xl transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm font-bold text-cyan-500 dark:text-cyan-300">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-[15px] leading-7 text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {project.points.map((point) => (
                      <div key={point} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-300" />
                        <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-cyan-300/45 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700 dark:border-cyan-400/20 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-cyan-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl border border-cyan-400/40 bg-white/70 px-5 py-4 text-sm font-black text-cyan-800 shadow-sm transition-all duration-300 hover:border-cyan-400 hover:text-white dark:bg-transparent dark:text-white"
                    >
                      <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 group-hover/btn:translate-y-0" />
                      <FaGithub size={18} />
                      GitHub
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}