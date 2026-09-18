"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  { label: "Languages", items: ["C++", "Python", "JavaScript", "TypeScript"] },
  { label: "AI / ML", items: ["LangGraph", "RAG", "MCP", "NLP", "ML Clustering"] },
  {
    label: "Frameworks & Backend",
    items: ["FastAPI", "FastMCP", "Node.js", "Express.js", "Next.js", "React.js"],
  },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"] },
  { label: "Tools & Platforms", items: ["Cursor", "Git", "Postman", "Firebase", "Supabase"] },
];

const TABS = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <div className="rounded-2xl border border-line/10 bg-surface-2/50 p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-fg">
            Savitribai Phule Pune University
          </h3>
          <span className="font-mono text-xs text-muted">Jul 2021 — Jun 2025</span>
        </div>
        <p className="mt-2 text-muted">
          Bachelor of Engineering, Artificial Intelligence and Data Science
        </p>
        <p className="mt-4 inline-flex items-baseline gap-2 rounded-lg bg-accent/10 px-3 py-1.5">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">
            CGPA
          </span>
          <span className="text-lg font-semibold text-accent">8.37</span>
        </p>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const activeTab = TABS.find((t) => t.id === tab);

  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-28">
      <SectionHeading
        eyebrow="01 — About"
        title="Systems engineering, with an AI edge."
      />

      <div className="mt-12 max-w-3xl">
        <div>
          <Reveal delay={0.1}>
            <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m a Software Engineering Associate at{" "}
              <span className="text-fg">Dassault Systèmes</span>, working on
              low-level memory management inside a large-scale native C++ CAD
              product while building agentic tooling on top of it. I hold a BE in
              Artificial Intelligence and Data Science from Savitribai Phule Pune
              University.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
              My work sits where systems programming meets applied AI — LangGraph
              pipelines and MCP servers on one side, full-stack products like
              TranSafer and SmartSlot on the other. Competitive programming keeps
              the fundamentals sharp.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-8">
            <div className="inline-flex gap-1 rounded-full border border-line/10 bg-surface-2/50 p-1">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    tab === t.id ? "text-bg" : "text-muted hover:text-fg"
                  }`}
                >
                  {tab === t.id && (
                    <motion.span
                      layoutId="about-tab"
                      className="absolute inset-0 -z-10 rounded-full bg-fg"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {t.title}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {activeTab.content}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
