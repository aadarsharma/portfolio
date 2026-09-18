import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { HiArrowUpRight } from "react-icons/hi2";

const achievements = [
  {
    metric: "1741",
    label: "Highest rating",
    title: "LeetCode",
    detail: "Top ~10% globally in data structures & algorithms.",
    href: "https://leetcode.com/u/adarsharma56763/",
  },
  {
    metric: "3★",
    label: "1639 rating",
    title: "CodeChef",
    detail: "Top ~1% of 200,000+ in competitive programming.",
    href: "",
  },
  {
    metric: "#841",
    label: "Global rank",
    title: "TCS CodeVita S12",
    detail: "Out of 200,000+ participants worldwide.",
    href: "",
  },
];

const Accomplishments = () => (
  <section id="achievements" className="scroll-mt-28 py-20 sm:py-28">
    <SectionHeading
      eyebrow="04 — Achievements"
      title="Measured against the field."
      align="center"
    />

    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {achievements.map((a, i) => {
        const Wrapper = a.href ? "a" : "div";
        return (
          <Reveal key={a.title} delay={i * 0.08}>
            <Wrapper
              {...(a.href
                ? { href: a.href, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="card group flex h-full flex-col p-6"
            >
              <div className="flex items-start justify-between">
                <span className="bg-gradient-to-br from-accent to-accent-sage bg-clip-text text-4xl font-semibold tracking-tightest text-transparent sm:text-5xl">
                  {a.metric}
                </span>
                {a.href && (
                  <HiArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                )}
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {a.label}
              </p>
              <h3 className="mt-5 text-lg font-semibold text-fg">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {a.detail}
              </p>
            </Wrapper>
          </Reveal>
        );
      })}
    </div>
  </section>
);

export default Accomplishments;
