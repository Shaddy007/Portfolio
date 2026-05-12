"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  FileText,
  ShieldCheck,
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const resumeHighlights = [
  "Manual, functional, regression, smoke, and sanity testing",
  "API testing with Postman using status code and response validation",
  "SQL validation for database accuracy and data consistency",
  "Clear bug reports with severity, priority, steps, and evidence",
  "Basic automation knowledge with Playwright and Selenium",
];

const targetRoles = [
  "Software QA Engineer",
  "Junior QA Engineer",
  "SQA Engineer",
  "QA Intern",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Resume() {
  return (
    <section id="resume" className="section-shell scroll-mt-28">
      <div className="section-wrap section-space">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-cyan-300/35 bg-white/65 shadow-[0_34px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-cyan-400/20 dark:bg-[#06101f]/80 dark:shadow-[0_34px_130px_rgba(0,0,0,0.42)]"
        >
          {/* Premium background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.12),transparent_36%,rgba(139,92,246,0.12))] dark:bg-[linear-gradient(120deg,rgba(34,211,238,0.08),transparent_38%,rgba(139,92,246,0.08))]" />

            <motion.div
              animate={{
                x: [0, 34, 0],
                y: [0, -24, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/16 blur-[135px] dark:bg-cyan-500/10"
            />

            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 28, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-36 -right-36 h-[28rem] w-[28rem] rounded-full bg-violet-500/16 blur-[145px] dark:bg-violet-600/12"
            />
          </div>

          <div className="relative grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* LEFT SIDE */}
            <div className="relative p-7 md:p-9 lg:p-10 xl:p-12">
              <div className="absolute right-0 top-10 hidden h-[calc(100%-80px)] w-px bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent lg:block" />

              <motion.div
                initial={{ opacity: 0, x: -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
                className="flex h-full flex-col justify-center"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-cyan-400" />
                  <p className="section-kicker">Resume</p>
                </div>

                <h2 className="glow-text max-w-2xl text-4xl font-black tracking-[-0.045em] md:text-5xl lg:text-6xl">
                  Professional CV for{" "}
                  <span className="gradient-text">SQA Roles</span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 md:text-lg">
                  A recruiter-ready resume presenting my QA skills, testing
                  projects, tools, education, and practical software quality
                  assurance experience in a clean professional format.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
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
                      <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    </span>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/40 bg-white/70 px-7 py-4 text-sm font-black text-cyan-800 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-cyan-500"
                  >
                    Contact Me
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </motion.a>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                  className="group mt-8 rounded-[1.7rem] border border-cyan-300/35 bg-white/50 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur dark:border-cyan-400/15 dark:bg-white/[0.035]"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-lg shadow-cyan-500/20 transition duration-300 group-hover:scale-105">
                      <ShieldCheck className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="font-black text-slate-950 dark:text-white">
                        QA-Focused Profile
                      </p>

                      <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
                        Focused on practical software testing, defect
                        documentation, API validation, SQL checking, and
                        continuous quality improvement.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.27, ease: "easeOut" }}
                  className="mt-4 grid gap-3 sm:grid-cols-3"
                >
                  {[
                    { value: "Manual", label: "Testing" },
                    { value: "API", label: "Validation" },
                    { value: "SQL", label: "Checking" },
                  ].map((item) => (
                    <div
                      key={item.value}
                      className="rounded-2xl border border-cyan-300/25 bg-white/35 px-4 py-3 shadow-sm backdrop-blur dark:border-cyan-400/12 dark:bg-white/[0.025]"
                    >
                      <p className="text-sm font-black text-slate-950 dark:text-white">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative border-t border-cyan-400/15 bg-white/25 p-7 dark:bg-slate-950/20 md:p-9 lg:border-t-0 lg:p-10 xl:p-12">
              <motion.div
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
                className="flex h-full flex-col justify-center"
              >
                {/* Professional CV Preview */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="relative mb-7 overflow-hidden rounded-[1.8rem] border border-cyan-300/35 bg-white/70 p-5 shadow-[0_24px_70px_rgba(14,165,233,0.13)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.14),transparent_36%)]" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-lg shadow-cyan-500/20">
                        <FileText className="h-7 w-7" />
                      </div>

                      <div>
                        <p className="text-lg font-black text-slate-950 dark:text-white">
                          Shadman Sadiq Chowdhury
                        </p>

                        <p className="mt-1 text-sm font-bold text-cyan-600 dark:text-cyan-300">
                          Aspiring Software QA Engineer
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full border border-cyan-400/35 bg-cyan-400/10 px-3 py-1.5 text-xs font-black text-cyan-700 dark:text-cyan-300">
                      CV
                    </span>
                  </div>

                  <div className="relative mt-5 grid gap-3">
                    <div className="rounded-2xl border border-cyan-300/30 bg-white/55 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300">
                        Core Profile
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                        Manual Testing · API Testing · SQL Validation · Bug
                        Reporting
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-cyan-300/30 bg-white/55 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                        <p className="text-lg font-black text-slate-950 dark:text-white">
                          QA
                        </p>
                        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          Focus
                        </p>
                      </div>

                      <div className="rounded-2xl border border-cyan-300/30 bg-white/55 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                        <p className="text-lg font-black text-slate-950 dark:text-white">
                          3+
                        </p>
                        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          Projects
                        </p>
                      </div>

                      <div className="rounded-2xl border border-cyan-300/30 bg-white/55 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                        <p className="text-lg font-black text-slate-950 dark:text-white">
                          SQA
                        </p>
                        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          Target
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="card-title text-2xl">Resume Highlights</h3>

                  <span className="hidden rounded-full border border-cyan-400/35 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-600 dark:text-cyan-300 sm:inline-flex">
                    QA Ready
                  </span>
                </div>

                <div className="space-y-1.5">
                  {resumeHighlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 22 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.42,
                        delay: 0.16 + index * 0.06,
                        ease: "easeOut",
                      }}
                      className="group flex gap-3 rounded-2xl border border-cyan-300/0 p-2.5 transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/45 dark:hover:border-cyan-400/15 dark:hover:bg-white/[0.03]"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-300" />

                      <p className="leading-7 text-slate-700 dark:text-slate-300">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
                  className="mt-6 rounded-[1.5rem] border border-cyan-400/35 bg-cyan-400/10 p-5 shadow-[0_18px_45px_rgba(14,165,233,0.12)] dark:border-cyan-400/20 dark:bg-cyan-400/8"
                >
                  <p className="section-kicker text-xs">Target Roles</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {targetRoles.map((role) => (
                      <span
                        key={role}
                        className="rounded-full border border-cyan-300/45 bg-white/55 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700 dark:border-cyan-400/20 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-cyan-300"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}