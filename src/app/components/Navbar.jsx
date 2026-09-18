"use client";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt4, HiX, HiMoon, HiSun } from "react-icons/hi";
import MenuOverlay from "./MenuOverlay";
import ThemeContext from "./ThemeContext";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Projects", path: "#projects" },
  { title: "Achievements", path: "#achievements" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.path.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ease-smooth sm:px-5 ${
          scrolled
            ? "glass shadow-[0_8px_32px_-12px_rgb(0_0_0_/_0.35)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-base font-semibold tracking-tight text-fg"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-sage font-mono text-sm font-bold text-bg">
            AS
          </span>
          <span className="hidden sm:inline">Aadarsh Sharma</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.path} className="relative">
              <Link
                href={link.path}
                className={`relative block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                  active === link.path
                    ? "text-fg"
                    : "text-muted hover:text-fg"
                }`}
              >
                {active === link.path && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent/12 ring-1 ring-accent/25"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleThemeHandler}
            className="grid h-9 w-9 place-items-center rounded-full border border-line/10 bg-surface-2/60 text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent"
          >
            {isDarkTheme ? (
              <HiSun className="h-[18px] w-[18px]" />
            ) : (
              <HiMoon className="h-[18px] w-[18px]" />
            )}
          </button>

          <Link
            href="#contact"
            className="hidden rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity duration-300 hover:opacity-85 sm:block"
          >
            Get in touch
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setNavbarOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line/10 bg-surface-2/60 text-fg md:hidden"
          >
            {navbarOpen ? (
              <HiX className="h-[18px] w-[18px]" />
            ) : (
              <HiMenuAlt4 className="h-[18px] w-[18px]" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {navbarOpen && (
          <MenuOverlay
            links={navLinks}
            active={active}
            onNavigate={() => setNavbarOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
