import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, description, align = "left" }) => (
  <Reveal
    className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
      {eyebrow}
    </span>
    <h2 className="mt-3 text-3xl font-semibold tracking-tightest text-fg sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
    )}
  </Reveal>
);

export default SectionHeading;
