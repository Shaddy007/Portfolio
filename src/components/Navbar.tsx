"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Send, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="premium-navbar fixed left-0 right-0 top-0 z-50"
    >
      <nav className="mx-auto flex h-20 max-w-[1380px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" onClick={closeMenu} className="brand-wordmark">
          <span className="brand-wordmark-main">Portfolio</span>
          <span className="brand-wordmark-dot">.</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative text-sm font-semibold text-[var(--nav-text)] transition hover:text-cyan-300"
            >
              {item}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <a href="#contact" className="navbar-action-btn navbar-touch-btn">
            <Send size={15} />
            Get in Touch
          </a>

          <a
            href="/cv.pdf"
            download="Shadman_Sadiq_Chowdhury_CV.pdf"
            className="navbar-action-btn navbar-cv-btn"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="mobile-menu-btn"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="premium-mobile-menu px-5 pb-5 pt-3 lg:hidden"
          >
            <div className="mx-auto flex max-w-[1380px] flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--nav-text)] transition hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {item}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 px-4 py-3 text-sm font-bold text-cyan-300"
              >
                <Send size={16} />
                Get in Touch
              </a>

              <a
                href="/cv.pdf"
                download="Shadman_Sadiq_Chowdhury_CV.pdf"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 px-4 py-3 text-sm font-bold text-white"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}