"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  const applyTheme = (selectedTheme: Theme) => {
    const root = document.documentElement;

    root.setAttribute("data-theme", selectedTheme);
    root.classList.remove("dark", "light");

    if (selectedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.add("light");
    }

    window.dispatchEvent(
      new CustomEvent("portfolio-theme-change", {
        detail: selectedTheme,
      })
    );
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      setTheme("dark");
      localStorage.setItem("portfolio-theme", "dark");
      applyTheme("dark");
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    applyTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="theme-toggle"
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        <Sun size={17} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}