"use client";
import React, { useRef, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  stack = [],
  gitUrl,
  previewUrl,
}) => {
  const ref = useRef(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, on: false });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      on: true,
    });
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setSpot((s) => ({ ...s, on: false }))}
      className="card group flex h-full flex-col overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[1.25rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, rgb(var(--glow) / 0.10), transparent 65%)`,
          opacity: spot.on ? 1 : 0,
        }}
      />

      <div className="relative z-20 flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-fg">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-1.5">
            {gitUrl && (
              <a
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source on GitHub`}
                className="grid h-8 w-8 place-items-center rounded-full border border-line/10 text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <FiGithub className="h-[15px] w-[15px]" />
              </a>
            )}
            {previewUrl && (
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="grid h-8 w-8 place-items-center rounded-full border border-line/10 text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <HiArrowUpRight className="h-[15px] w-[15px]" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="chip font-mono">
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
