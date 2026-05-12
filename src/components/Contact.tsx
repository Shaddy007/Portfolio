"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactCards = [
  {
    title: "Email",
    value: "shadmansadiq230@gmail.com",
    href: "mailto:shadmansadiq230@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "01339810281",
    href: "tel:01339810281",
    icon: Phone,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/shadmanchowdhurry",
    href: "https://www.linkedin.com/in/shadmanchowdhurry/",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    value: "github.com/Shaddy007",
    href: "https://github.com/Shaddy007",
    icon: FaGithub,
  },
];

const roles = [
  "Software QA Engineer",
  "Junior QA Engineer",
  "SQA Engineer",
  "QA Intern",
  "Manual Tester",
  "API Tester",
];

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -34 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 34 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: 0.1, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-28">
      <div className="section-wrap section-space">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <p className="section-kicker">Contact</p>
            </div>

            <h2 className="glow-text max-w-2xl text-4xl font-black tracking-[-0.045em] md:text-5xl lg:text-6xl">
              Let’s Build{" "}
              <span className="gradient-text">Reliable Software</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 dark:text-slate-300 md:text-lg">
              I am open to Software QA Engineer, Junior QA Engineer, QA Intern,
              and SQA Trainee opportunities. Feel free to connect with me for
              roles, projects, or professional networking.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group relative mt-8 overflow-hidden rounded-[1.7rem] border border-emerald-300/40 bg-emerald-400/10 p-5 shadow-[0_18px_55px_rgba(16,185,129,0.10)] backdrop-blur transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_24px_70px_rgba(16,185,129,0.15)] dark:border-emerald-400/20 dark:bg-emerald-400/8"
            >
              <div className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-br from-emerald-400/12 to-cyan-400/10 transition-transform duration-300 group-hover:translate-y-0" />

              <div className="relative flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-white shadow-lg shadow-emerald-500/20 transition duration-300 group-hover:scale-105">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-black text-emerald-600 dark:text-emerald-300">
                    Currently Available
                  </p>

                  <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
                    Looking for entry-level Software Quality Assurance
                    opportunities where I can contribute through manual testing,
                    API testing, SQL validation, and clear defect reporting.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.div
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/55 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-700 dark:border-cyan-400/20 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-cyan-300"
              >
                <MapPin className="h-4 w-4 text-cyan-500 dark:text-cyan-300" />
                Dhaka, Bangladesh
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/55 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-700 dark:border-cyan-400/20 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-cyan-300"
              >
                <Send className="h-4 w-4 text-cyan-500 dark:text-cyan-300" />
                Open to QA Roles
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[2.4rem] border border-cyan-300/35 bg-white/60 p-6 shadow-[0_34px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-cyan-400/20 dark:bg-[#06101f]/80 dark:shadow-[0_34px_130px_rgba(0,0,0,0.42)]"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.10),transparent_38%,rgba(139,92,246,0.10))] dark:bg-[linear-gradient(120deg,rgba(34,211,238,0.06),transparent_40%,rgba(139,92,246,0.07))]" />

              <motion.div
                animate={{
                  x: [0, -24, 0],
                  y: [0, 18, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-cyan-400/18 blur-[120px] dark:bg-cyan-500/10"
              />

              <motion.div
                animate={{
                  x: [0, 26, 0],
                  y: [0, -22, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-violet-500/16 blur-[135px] dark:bg-violet-600/12"
              />
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2">
              {contactCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.a
                    key={card.title}
                    href={card.href}
                    target={
                      card.title === "LinkedIn" || card.title === "GitHub"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      card.title === "LinkedIn" || card.title === "GitHub"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.18 + index * 0.07,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-cyan-300/30 bg-white/65 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_22px_65px_rgba(14,165,233,0.17)] dark:border-white/10 dark:bg-white/[0.035]"
                  >
                    <div className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-br from-cyan-500/12 to-violet-500/12 transition-transform duration-300 group-hover:translate-y-0" />

                    <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-300 group-hover:bg-cyan-400/18" />

                    <div className="relative">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-[0_14px_35px_rgba(14,165,233,0.25)] dark:text-cyan-300">
                          <Icon size={24} />
                        </div>

                        <ArrowUpRight className="h-4 w-4 text-cyan-500 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 dark:text-cyan-300" />
                      </div>

                      <p className="font-black text-slate-950 dark:text-white">
                        {card.title}
                      </p>

                      <p className="mt-2 break-all text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {card.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
              className="relative mt-5 overflow-hidden rounded-[1.6rem] border border-cyan-400/35 bg-cyan-400/10 p-5 shadow-[0_18px_45px_rgba(14,165,233,0.12)] dark:border-cyan-400/20 dark:bg-cyan-400/8"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/18 blur-3xl" />

              <div className="relative mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  <p className="section-kicker text-xs">Preferred Roles</p>
                </div>

                <span className="hidden rounded-full border border-cyan-400/35 bg-white/50 px-3 py-1.5 text-xs font-black text-cyan-700 dark:bg-white/[0.03] dark:text-cyan-300 sm:inline-flex">
                  Available
                </span>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-cyan-300/45 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700 dark:border-cyan-400/20 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-cyan-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}