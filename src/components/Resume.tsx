"use client";

import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  Calendar,
  Download,
  GraduationCap,
  MapPin,
} from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Ahsanullah University of Science & Technology",
    period: "2025",
    location: "Dhaka, Bangladesh",
  },
];

const experience = [
  {
    title: "Software QA / SQA Focus",
    company: "Portfolio Projects & Academic Work",
    period: "2024 - Present",
    location: "Dhaka, Bangladesh",
    points: [
      "Designed and executed test cases for web application workflows.",
      "Performed manual testing, API validation, defect reporting, and regression testing.",
      "Worked with tools and concepts including Postman, JIRA, SQL, Selenium, Playwright, and JMeter basics.",
    ],
  },
];

const achievements = [
  "Champion & MVP Captain, AUST CSE Football Tournament - Fall 2023",
  "Champion, AUST CSE Cricket Carnival - 2025",
  "Champion, Smash Masters Championship powered by AC RED CLUB - 2025",
  "Organizer, AUST CSE Society events",
];

export default function Resume() {
  return (
    <section
      id="resume"
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
          <p className="section-kicker">Resume</p>

          <h2 className="section-title mt-4">
            My professional <span className="gradient-text">journey</span>
          </h2>

          <p className="section-subtitle mx-auto mt-5">
            A focused path built around software quality assurance, practical
            testing knowledge, technical learning, and leadership experience.
          </p>

          <div className="mt-8 flex justify-center">
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
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="rounded-[2rem] border border-cyan-300/20 bg-white/55 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-cyan-400/12 dark:bg-white/[0.035]"
          >
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-500 dark:text-cyan-300">
                <GraduationCap size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                  Education
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  Academic foundation
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-[1.5rem] border border-cyan-300/20 bg-white/50 p-5 dark:border-cyan-400/10 dark:bg-white/[0.025]"
                >
                  <h4 className="text-lg font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                    {item.degree}
                  </h4>

                  <p className="mt-2 text-sm font-semibold text-cyan-600 dark:text-cyan-300">
                    {item.institute}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={15} />
                      {item.period}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <MapPin size={15} />
                      {item.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            className="rounded-[2rem] border border-cyan-300/20 bg-white/55 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-cyan-400/12 dark:bg-white/[0.035]"
          >
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-500 dark:text-violet-300">
                <BriefcaseBusiness size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                  Experience
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  QA-focused practice
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {experience.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-cyan-300/20 bg-white/50 p-5 dark:border-cyan-400/10 dark:bg-white/[0.025]"
                >
                  <h4 className="text-lg font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm font-semibold text-cyan-600 dark:text-cyan-300">
                    {item.company}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={15} />
                      {item.period}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <MapPin size={15} />
                      {item.location}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="mt-8 rounded-[2rem] border border-cyan-300/20 bg-white/55 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-cyan-400/12 dark:bg-white/[0.035]"
        >
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
              <Award size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                Achievements
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                Sports, leadership, and activities
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-cyan-300/20 bg-white/50 p-5 text-sm font-semibold leading-6 text-slate-700 dark:border-cyan-400/10 dark:bg-white/[0.025] dark:text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}