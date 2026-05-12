"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bug,
  Code2,
  Database,
  FlaskConical,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const skills = [
  {
    title: "Testing & QA",
    icon: FlaskConical,
    image: `${basePath}/skills/testing-qa.png`,
    accent: "cyan",
    items: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Test Case Design",
    ],
  },
  {
    title: "API & Database",
    icon: Database,
    image: `${basePath}/skills/api-database.png`,
    accent: "cyan",
    items: [
      "Postman",
      "REST API Testing",
      "SQL Validation",
      "MySQL",
      "SQL Server",
      "Data Verification",
    ],
  },
  {
    title: "Bug Tracking",
    icon: Bug,
    image: `${basePath}/skills/bug-tracking.png`,
    accent: "purple",
    items: [
      "Bug Reporting",
      "Severity & Priority",
      "Defect Life Cycle",
      "JIRA",
      "Re-testing",
      "Documentation",
    ],
  },
  {
    title: "Automation",
    icon: Rocket,
    image: `${basePath}/skills/automation.png`,
    accent: "cyan",
    items: [
      "Playwright",
      "Selenium Basic",
      "JMeter Basic",
      "JavaScript",
      "Test Scripts",
      "GitHub",
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    image: `${basePath}/skills/programming.png`,
    accent: "cyan",
    items: ["Java", "Python", "JavaScript", "C/C++", "React Basic", "Git"],
  },
  {
    title: "Soft Skills",
    icon: ShieldCheck,
    image: `${basePath}/skills/soft-skills.png`,
    accent: "purple",
    items: [
      "Analytical Thinking",
      "Communication",
      "Teamwork",
      "Fast Learning",
      "Adaptability",
      "Clear Reporting",
    ],
  },
];

const accentStyles = {
  cyan: {
    cardBorder:
      "border-cyan-400/35 hover:border-cyan-400/70 dark:border-cyan-400/18 dark:hover:border-cyan-300/55",
    iconBox:
      "from-cyan-400/28 via-sky-500/18 to-violet-500/18 text-cyan-600 dark:text-cyan-300",
    line: "from-cyan-300 via-sky-400 to-blue-500",
    chip:
      "border-cyan-400/35 bg-white/70 text-slate-800 shadow-cyan-500/10 hover:border-cyan-400 hover:text-cyan-700 dark:border-cyan-300/18 dark:bg-white/[0.045] dark:text-cyan-50 dark:hover:text-cyan-300",
    glow: "bg-cyan-400/20",
    imageGlow: "bg-cyan-400/20",
    bottomLine: "from-cyan-400 to-sky-500",
  },
  purple: {
    cardBorder:
      "border-violet-400/35 hover:border-violet-400/70 dark:border-violet-400/20 dark:hover:border-violet-300/55",
    iconBox:
      "from-cyan-400/22 via-blue-500/16 to-violet-500/32 text-cyan-600 dark:text-cyan-300",
    line: "from-cyan-300 via-violet-400 to-fuchsia-400",
    chip:
      "border-violet-400/35 bg-white/70 text-slate-800 shadow-violet-500/10 hover:border-violet-400 hover:text-violet-700 dark:border-violet-300/20 dark:bg-white/[0.045] dark:text-violet-50 dark:hover:text-violet-300",
    glow: "bg-violet-400/20",
    imageGlow: "bg-violet-400/20",
    bottomLine: "from-cyan-400 to-violet-500",
  },
} as const;

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-28">
      <div className="section-wrap section-space">
        <div className="mx-auto max-w-[1360px]">
          {/* HEADER */}
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end"
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-700 shadow-[0_14px_38px_rgba(14,165,233,0.08)] backdrop-blur-xl dark:border-cyan-400/18 dark:bg-white/[0.035] dark:text-cyan-300">
                <Sparkles size={14} />
                Technical Skills
              </div>

              <h2 className="text-5xl font-black leading-[0.98] tracking-[-0.055em] text-slate-950 dark:text-white md:text-6xl">
                My{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.16)]">
                  QA Toolkit
                </span>
              </h2>

              <p className="mt-5 max-w-3xl text-base font-semibold leading-8 text-slate-700 dark:font-normal dark:text-slate-300 md:text-lg">
                A focused set of testing, API, database, automation, and
                communication skills that support practical software quality
                assurance work.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="relative hidden overflow-hidden rounded-3xl border border-cyan-400/25 bg-white/58 p-5 shadow-[0_20px_60px_rgba(14,165,233,0.10)] backdrop-blur-xl transition duration-200 dark:border-cyan-400/14 dark:bg-white/[0.035] md:block"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-600 dark:text-cyan-300">
                  <Star size={20} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                    Focus Area
                  </p>

                  <p className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                    Software QA / SQA
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* SKILL CARDS */}
          <div className="grid gap-6 lg:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const style =
                accentStyles[skill.accent as keyof typeof accentStyles];

              return (
                <motion.article
                  key={skill.title}
                  initial={{ opacity: 0, y: 34, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.58,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.18, ease: "easeOut" },
                  }}
                  className={`group relative min-h-[322px] overflow-hidden rounded-[1.9rem] border ${style.cardBorder} bg-white/64 p-6 shadow-[0_26px_78px_rgba(15,23,42,0.10)] backdrop-blur-2xl transition-all duration-200 hover:shadow-[0_28px_82px_rgba(14,165,233,0.15)] dark:bg-[#06101f]/68 dark:shadow-[0_0_80px_rgba(34,211,238,0.055)]`}
                >
                  {/* LIGHT SURFACE */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(14,165,233,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.78),rgba(232,246,255,0.56)_48%,rgba(245,243,255,0.52))] dark:hidden" />

                  {/* DARK SURFACE */}
                  <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_12%_12%,rgba(34,211,238,0.13),transparent_34%),linear-gradient(135deg,rgba(7,16,36,0.58),rgba(3,8,23,0.86))] dark:block" />

                  {/* FAST MOVING SHINE */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_20%,rgba(255,255,255,0.24)_45%,transparent_65%)] opacity-0 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-100 dark:bg-[linear-gradient(105deg,transparent_20%,rgba(255,255,255,0.08)_45%,transparent_65%)]" />

                  {/* SOFT CARD GLOW */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full ${style.glow} blur-[85px] opacity-70 transition duration-200 group-hover:opacity-100`}
                  />

                  {/* IMAGE GLOW */}
                  <div
                    className={`pointer-events-none absolute bottom-3 right-3 h-44 w-44 rounded-full ${style.imageGlow} blur-[58px] opacity-65 transition duration-200 dark:opacity-42`}
                  />

                  {/* IMAGE */}
                  <div className="pointer-events-none absolute bottom-4 right-4 h-[150px] w-[200px] md:h-[158px] md:w-[210px]">
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      fill
                      sizes="210px"
                      className="object-contain object-right-bottom opacity-75 drop-shadow-[0_0_24px_rgba(34,211,238,0.18)] transition duration-300 group-hover:scale-105 group-hover:opacity-100 dark:opacity-60 dark:group-hover:opacity-90"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 flex min-h-[274px] flex-col">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${style.iconBox} shadow-[0_0_30px_rgba(34,211,238,0.13)] transition duration-200 group-hover:scale-105`}
                      >
                        <Icon size={31} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                          {skill.title}
                        </h3>

                        <div
                          className={`mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r ${style.line} shadow-[0_0_14px_rgba(34,211,238,0.45)]`}
                        />
                      </div>
                    </div>

                    <div className="relative z-10 mt-7 flex max-w-[72%] flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.35,
                            delay: 0.15 + index * 0.04 + itemIndex * 0.025,
                            ease: "easeOut",
                          }}
                          className={`rounded-full border px-3.5 py-2 text-xs font-bold leading-none shadow-lg backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 ${style.chip}`}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>

                    <div className="mt-auto pt-5">
                      <div
                        className={`h-[3px] w-20 rounded-full bg-gradient-to-r ${style.bottomLine} opacity-80 shadow-[0_0_18px_rgba(34,211,238,0.35)] transition-all duration-200 group-hover:w-28`}
                      />
                    </div>
                  </div>

                  {/* PREMIUM EDGES */}
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-80 dark:via-white/25" />
                  <div className="pointer-events-none absolute inset-y-8 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400/35 to-transparent" />
                  <div className="pointer-events-none absolute inset-y-8 right-0 w-px bg-gradient-to-b from-transparent via-violet-400/25 to-transparent" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}