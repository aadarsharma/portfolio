import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    title: "Software Engineering Associate",
    company: "Dassault Systèmes",
    dateRange: "Jul 2026 — Present",
    location: "Pune, MH · Hybrid",
    current: true,
    details: [
      "Develop tools for LEO, a Virtual Companion on the 3DEXPERIENCE AI-native agentic platform, driving CAD design changes from natural-language prompts within a large-scale native C++ product.",
      "Debug and resolve memory leaks in C++, collaborating directly on low-level memory management and allocation patterns within a large-scale production CAD codebase.",
    ],
    stack: ["C++", "CAA", "COM"],
  },
  {
    title: "Apprentice — Software Engineer",
    company: "Dassault Systèmes",
    dateRange: "Sep 2025 — Jul 2026",
    location: "Pune, MH · Hybrid",
    details: [
      "Architected FixGen, a FastMCP server (6 tools) that automates crash analysis from a single /FixGen IR-# command via AI algorithms and agentic pipeline design, cutting average IR resolution time by 45%.",
      "Engineered a C++ source retrieval tool that resolves dsxplore codeview URLs and extracts function bodies via brace-matching regex over a large native codebase.",
      "Built SSO-authenticated Selenium scrapers and orchestrated a 6-step LangGraph agentic pipeline — metadata, URL classification, stack scraping, crash parsing, source retrieval, fix generation — to automate fixes from raw iCloudHealth crash data.",
    ],
    stack: ["C++", "Python", "LangGraph", "FastMCP", "FastAPI", "Selenium", "httpx"],
  },
  {
    title: "Backend Intern",
    company: "WhatBytes",
    dateRange: "Jul 2025 — Aug 2025",
    location: "Bengaluru, KA · Remote",
    details: [
      "Developed and deployed a REST API-based auth service (Fastify, Supabase, JWT, Google OAuth, Nodemailer), delivering secure login, refresh-token rotation, and rate limiting.",
      "Constructed data pipelines over LinkedIn and Twitter/X data, applying NLP topic modeling and sentiment analysis.",
      "Implemented a hybrid recommender system (content-based and collaborative filtering) as a reusable backend module for context-aware matching.",
    ],
    stack: ["Fastify", "Supabase", "Node.js", "REST APIs"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="scroll-mt-28 py-20 sm:py-28">
    <SectionHeading
      eyebrow="02 — Experience"
      title="Where I've shipped."
      description="From agentic crash-analysis pipelines to production C++ memory work."
    />

    <div className="relative mt-14">
      <div
        aria-hidden="true"
        className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-accent/50 via-line/12 to-transparent sm:left-[9px]"
      />

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <Reveal key={`${exp.company}-${exp.title}`} delay={i * 0.08}>
            <div className="relative pl-8 sm:pl-12">
              <span className="absolute left-0 top-2 grid h-[15px] w-[15px] place-items-center rounded-full border-2 border-accent bg-bg sm:h-[19px] sm:w-[19px]">
                {exp.current && (
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                )}
              </span>

              <div className="card p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-fg sm:text-xl">
                      {exp.title}
                    </h3>
                    <p className="mt-0.5 text-accent">{exp.company}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-mono text-xs text-muted">{exp.dateRange}</p>
                    <p className="mt-0.5 text-xs text-muted">{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {exp.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="relative pl-5 text-sm leading-relaxed text-muted"
                    >
                      <span className="absolute left-0 top-[9px] h-1 w-1 rounded-full bg-accent/60" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-line/8 pt-4">
                  {exp.stack.map((s) => (
                    <span key={s} className="chip font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
