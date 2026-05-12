"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  Bug,
  Code2,
  Database,
  Gauge,
  Layers3,
  SearchCheck,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const skillCards = [
  {
    title: "Testing & QA",
    image: "/skills/testing-qa.png",
    icon: ShieldCheck,
    description:
      "Manual testing, functional testing, regression testing, smoke testing, sanity testing, exploratory testing, and test case design.",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Exploratory Testing",
    ],
  },
  {
    title: "API & Database",
    image: "/skills/api-database.png",
    icon: Server,
    description:
      "API request validation, status code checking, payload verification, SQL validation, and database testing basics.",
    skills: [
      "Postman",
      "API Testing",
      "Status Codes",
      "SQL",
      "MySQL",
      "Database Validation",
    ],
  },
  {
    title: "Bug Tracking",
    image: "/skills/bug-tracking.png",
    icon: Bug,
    description:
      "Clear defect reporting with proper severity, priority, reproducible steps, screenshots, and expected vs actual results.",
    skills: [
      "JIRA",
      "Bug Reports",
      "Severity",
      "Priority",
      "Repro Steps",
      "Documentation",
    ],
  },
  {
    title: "Automation",
    image: "/skills/automation.png",
    icon: Workflow,
    description:
      "Basic automation understanding using Selenium and Playwright, with interest in scalable QA automation practices.",
    skills: [
      "Selenium Basics",
      "Playwright Basics",
      "Automation Logic",
      "Test Scripts",
      "JMeter Basics",
      "Performance Testing",
    ],
  },
  {
    title: "Programming",
    image: "/skills/programming.png",
    icon: Code2,
    description:
      "Programming and technical foundation for understanding application logic, debugging, and working with development teams.",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "React Basics",
    ],
  },
  {
    title: "Soft Skills",
    image: "/skills/soft-skills.png",
    icon: Users,
    description:
      "Strong analytical thinking, communication, teamwork, adaptability, fast learning, and quality-focused problem solving.",
    skills: [
      "Analytical Thinking",
      "Communication",
      "Teamwork",
      "Fast Learner",
      "Adaptability",
      "Problem Solving",
    ],
  },
];

const highlights = [
  {
    title: "Test Case Design",
    icon: SearchCheck,
    text: "Writing clear, structured, and requirement-focused test cases.",
  },
  {
    title: "Defect Analysis",
    icon: Bug,
    text: "Finding, documenting, and communicating bugs with clarity.",
  },
  {
    title: "Quality Mindset",
    icon: Sparkles,
    text: "Thinking from user experience, reliability, and business value.",
  },
  {
    title: "Technical Growth",
    icon: Brain,
    text: "Improving through API testing, SQL, automation, and real projects.",
  },
];

const toolGroups = [
  {
    title: "Testing Tools",
    icon: Gauge,
    items: ["Postman", "JIRA", "Selenium", "Playwright", "JMeter"],
  },
  {
    title: "Development",
    icon: Layers3,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "SQL Server", "Firebase", "SQL Queries"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-shell relative scroll-mt-28 py-24"
    >
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="section-kicker">Skills</p>

          <h2 className="section-title mt-4">
            QA skills with a{" "}
            <span className="gradient-text">technical foundation</span>
          </h2>

          <p className="section-subtitle mx-auto mt-5">
            A balanced skill set focused on software testing, API validation,
            bug reporting, database checking, automation basics, and
            professional communication.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="group relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/60 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_30px_100px_rgba(14,165,233,0.16)] dark:border-cyan-400/12 dark:bg-white/[0.035]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />

                  <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-[0_0_35px_rgba(34,211,238,0.22)] backdrop-blur-xl">
                    <Icon size={25} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">
                    {card.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {card.skills.map((skill) => (
                      <div
                        key={skill}
                        className="rounded-2xl border border-cyan-300/20 bg-white/55 px-4 py-3 text-center text-xs font-bold text-slate-600 shadow-sm dark:border-cyan-400/10 dark:bg-white/[0.035] dark:text-slate-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-28" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="rounded-[1.7rem] border border-cyan-300/20 bg-white/55 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-cyan-400/12 dark:bg-white/[0.03]"
              >
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-500 dark:text-cyan-300">
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {toolGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="rounded-[2rem] border border-cyan-300/20 bg-white/55 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-cyan-400/12 dark:bg-white/[0.035]"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-500 dark:text-violet-300">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/20 bg-white/55 px-4 py-2 text-xs font-bold text-slate-600 dark:border-cyan-400/10 dark:bg-white/[0.035] dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}