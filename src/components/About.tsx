"use client";

import { motion } from "framer-motion";
import {
  Award,
  BrainCircuit,
  CheckCircle2,
  Code2,
  GraduationCap,
  Medal,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const strengths = [
  "Manual Testing",
  "API Testing",
  "SQL Validation",
  "Bug Reporting",
  "Test Case Design",
];

const bringItems = [
  {
    title: "QA Mindset",
    desc: "Detail-oriented, analytical, and focused on finding issues early to improve software quality and user experience.",
    icon: BrainCircuit,
    accent:
      "from-cyan-400/20 via-sky-500/10 to-transparent dark:from-cyan-400/12 dark:via-sky-500/8",
  },
  {
    title: "Technical Strengths",
    desc: "Strong foundation in manual testing, API testing, SQL validation, bug reporting, and growing automation skills.",
    icon: Code2,
    accent:
      "from-sky-400/18 via-blue-500/10 to-transparent dark:from-sky-400/12 dark:via-blue-500/8",
  },
  {
    title: "Leadership & Activities",
    desc: "Organizer at AUST CSE Society, sports enthusiast, professional dancer at Blue Poppers BD, and experienced team leader.",
    icon: Users,
    accent:
      "from-violet-400/18 via-purple-500/10 to-transparent dark:from-violet-400/12 dark:via-purple-500/8",
  },
];

const achievements = [
  "Champion & MVP Captain — AUST CSE Football Tournament, Fall 2023",
  "Champion — AUST CSE Cricket Carnival, 2025",
  "Champion — Smash Masters Championship powered by AC RED CLUB, 2025",
  "Champion — ACPL Football Season 5, 2025",
  "Runner-up — AUST CSE Cricket Carnival S2, 2026",
];

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-28">
      <div className="section-wrap section-space">
        <motion.div
          initial={{ opacity: 0, y: 42, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.6rem] border border-cyan-300/35 bg-white/62 shadow-[0_36px_130px_rgba(15,23,42,0.13)] backdrop-blur-2xl dark:border-cyan-400/18 dark:bg-[#06101f]/78 dark:shadow-[0_36px_140px_rgba(0,0,0,0.42)]"
        >
          {/* Premium surface glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.12),transparent_35%,rgba(139,92,246,0.12))] dark:bg-[linear-gradient(120deg,rgba(34,211,238,0.07),transparent_38%,rgba(139,92,246,0.08))]" />

            <motion.div
              animate={{
                x: [0, 32, 0],
                y: [0, -22, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/18 blur-[135px] dark:bg-cyan-500/10"
            />

            <motion.div
              animate={{
                x: [0, -34, 0],
                y: [0, 28, 0],
                scale: [1, 1.09, 1],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-36 -right-36 h-[28rem] w-[28rem] rounded-full bg-violet-500/18 blur-[145px] dark:bg-violet-600/12"
            />
          </div>

          <div className="relative grid gap-10 p-7 md:p-10 lg:grid-cols-[1.02fr_0.98fr] lg:p-12 xl:gap-14 xl:p-14">
            {/* LEFT SIDE */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-cyan-700 shadow-[0_14px_42px_rgba(14,165,233,0.10)] backdrop-blur dark:text-cyan-300">
                  <Sparkles size={14} />
                  About Me
                </div>

                <h2 className="max-w-2xl text-4xl font-black leading-[1.04] tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl xl:text-6xl">
                  Focused on{" "}
                  <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.18)]">
                    Software Quality
                  </span>
                </h2>

                <div className="mt-7 max-w-2xl space-y-5 text-base font-medium leading-8 text-slate-700 dark:text-slate-300">
                  <p>
                    I am an aspiring Software Quality Assurance Engineer with a
                    background in Computer Science and Engineering. I enjoy
                    testing real-world web applications, validating APIs,
                    writing clear test cases, reporting defects, and ensuring a
                    seamless user experience.
                  </p>

                  <p>
                    I am passionate about building reliable software by
                    combining analytical thinking, careful observation, and
                    strong documentation. I am continuously learning and
                    improving my automation skills to deliver better quality
                    with efficiency.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {strengths.map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.15 + index * 0.05,
                        ease: "easeOut",
                      }}
                      className="rounded-full border border-cyan-300/40 bg-white/55 px-4 py-2 text-sm font-bold text-slate-700 shadow-[0_10px_28px_rgba(14,165,233,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700 dark:border-cyan-400/18 dark:bg-white/[0.035] dark:text-slate-300 dark:hover:text-cyan-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  <motion.div
                    variants={cardReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.12,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-[1.7rem] border border-cyan-300/30 bg-white/55 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/55 hover:shadow-[0_24px_70px_rgba(14,165,233,0.16)] dark:border-cyan-400/14 dark:bg-white/[0.035]"
                  >
                    <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-cyan-500/10 to-sky-500/5 transition-transform duration-300 group-hover:translate-y-0" />

                    <div className="relative">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-sky-500/15 text-cyan-600 shadow-[0_0_30px_rgba(14,165,233,0.15)] dark:text-cyan-300">
                        <GraduationCap size={28} />
                      </div>

                      <p className="section-kicker text-xs">Education</p>

                      <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                        B.Sc. in CSE
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Ahsanullah University of Science and Technology
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={cardReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-[1.7rem] border border-violet-300/30 bg-white/55 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-violet-400/55 hover:shadow-[0_24px_70px_rgba(139,92,246,0.16)] dark:border-violet-400/14 dark:bg-white/[0.035]"
                  >
                    <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-cyan-500/8 to-violet-500/10 transition-transform duration-300 group-hover:translate-y-0" />

                    <div className="relative">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/18 to-violet-500/18 text-cyan-600 shadow-[0_0_30px_rgba(139,92,246,0.14)] dark:text-cyan-300">
                        <Target size={28} />
                      </div>

                      <p className="section-kicker text-xs">Career Focus</p>

                      <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                        Software QA / SQA
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Testing web applications with a focus on reliability,
                        usability, and continuous improvement.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* DIVIDER */}
            <div className="pointer-events-none absolute left-1/2 top-12 hidden h-[calc(100%-96px)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent lg:block" />

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
              className="relative lg:pl-8"
            >
              <p className="section-kicker mb-6">What I Bring</p>

              <div className="space-y-4">
                {bringItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 28 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: 0.14 + index * 0.08,
                        ease: "easeOut",
                      }}
                      whileHover={{ y: -5 }}
                      className="group relative overflow-hidden rounded-[1.7rem] border border-cyan-300/28 bg-white/55 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/55 hover:shadow-[0_24px_70px_rgba(14,165,233,0.14)] dark:border-cyan-400/14 dark:bg-white/[0.035]"
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent}`}
                      />

                      <div className="relative flex gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/18 to-violet-500/18 text-cyan-600 shadow-[0_0_28px_rgba(14,165,233,0.13)] transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-500 group-hover:text-white dark:text-cyan-300">
                          <Icon size={27} />
                        </div>

                        <div>
                          <h3 className="text-xl font-black tracking-[-0.02em] text-slate-950 dark:text-white">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.38, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="mt-5 overflow-hidden rounded-[1.7rem] border border-yellow-400/38 bg-yellow-300/10 p-5 shadow-[0_20px_60px_rgba(234,179,8,0.10)] backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/60 dark:bg-yellow-400/6"
              >
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/16 text-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.18)] dark:text-yellow-300">
                    <Trophy size={28} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black tracking-[-0.02em] text-slate-950 dark:text-white">
                      Achievements
                    </h3>

                    <p className="mt-1 text-xs font-black uppercase tracking-[0.22em] text-yellow-600 dark:text-yellow-300">
                      Leadership · Teamwork · Competitive Spirit
                    </p>

                    <div className="mt-4 space-y-2.5">
                      {achievements.map((item) => (
                        <div
                          key={item}
                          className="flex gap-3 text-[13px] leading-6 text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-1 shrink-0 text-yellow-500 dark:text-yellow-300"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.48, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                  className="rounded-[1.7rem] border border-cyan-300/28 bg-white/52 p-5 text-center shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/55 dark:border-cyan-400/14 dark:bg-white/[0.035]"
                >
                  <Medal className="mx-auto text-cyan-600 dark:text-cyan-300" />

                  <p className="mt-3 text-2xl font-black text-slate-950 dark:text-white">
                    4+
                  </p>

                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Championships
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.54, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                  className="rounded-[1.7rem] border border-violet-300/28 bg-white/52 p-5 text-center shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-violet-400/55 dark:border-violet-400/14 dark:bg-white/[0.035]"
                >
                  <Award className="mx-auto text-violet-600 dark:text-violet-300" />

                  <p className="mt-3 text-2xl font-black text-slate-950 dark:text-white">
                    MVP
                  </p>

                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Captain
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}