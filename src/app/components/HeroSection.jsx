"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";

const stats = [
  { value: "1741", label: "LeetCode rating" },
  { value: "3★", label: "CodeChef" },
  { value: "#841", label: "TCS CodeVita S12" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1NDGYamxiHSFBhcEOu6EqzG0-ndbC-Zf2/view";

const HeroSection = () => (
  <section className="relative flex min-h-[calc(100vh-10rem)] items-center py-12 sm:py-16">
    <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center lg:col-span-12 lg:text-left"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-line/10 bg-surface-2/60 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-sage opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-sage" />
          </span>
          Software Engineering Associate @ Dassault Systèmes
        </span>

        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tightest text-fg sm:text-6xl lg:text-8xl">
          Aadarsh
          <br />
          <span className="text-gradient">Sharma</span>
        </h1>

        <div className="mt-5 min-h-[2rem] font-mono text-lg text-muted sm:text-xl">
          <span className="text-accent">&gt;</span>{" "}
          <TypeAnimation
            sequence={[
              "C++ systems engineer",
              1600,
              "agentic AI tooling",
              1600,
              "full-stack builder",
              1600,
              "competitive programmer",
              1600,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            cursor
          />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
          I build tools for <span className="text-fg">LEO</span>, a Virtual
          Companion on the 3DEXPERIENCE AI-native agentic platform — turning
          natural-language prompts into CAD design changes inside a large-scale
          native C++ product.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
          <Link
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-all duration-300 hover:opacity-85 sm:w-auto"
          >
            Get in touch
            <HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line/15 bg-surface-2/40 px-6 py-3 text-sm font-medium text-fg backdrop-blur transition-all duration-300 hover:border-accent/50 hover:text-accent sm:w-auto"
          >
            View résumé
          </a>
        </div>

        <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line/10 pt-6 lg:max-w-lg">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <dt className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs leading-tight text-muted">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </div>

    <a
      href="#about"
      aria-label="Scroll to about"
      className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent lg:block"
    >
      <HiArrowDown className="h-5 w-5 animate-scroll-hint" />
    </a>
  </section>
);

export default HeroSection;
