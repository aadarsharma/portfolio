"use client";
import React, { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const socials = [
  { href: "https://github.com/aadarsharma", label: "GitHub", Icon: FiGithub },
  {
    href: "https://www.linkedin.com/in/aadarsh-sharma/",
    label: "LinkedIn",
    Icon: FiLinkedin,
  },
  {
    href: "https://leetcode.com/u/adarsharma56763/",
    label: "LeetCode",
    Icon: SiLeetcode,
  },
];

const inputClass =
  "w-full rounded-xl border border-line/10 bg-surface-2/60 px-4 py-3 text-sm text-fg placeholder-muted/70 outline-none transition-all duration-300 focus:border-accent/50 focus:bg-surface-2";

const EmailSection = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.target;
    const data = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(resData.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
      <SectionHeading
        eyebrow="05 — Contact"
        title="Let's build something."
        description="Always open to talking about agentic systems, backend architecture, C++ and interesting engineering problems."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="flex flex-col gap-3">
            <a
              href="mailto:adarsharma56763@gmail.com"
              className="card flex items-center gap-4 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                <HiOutlineMail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  Email
                </span>
                <span className="mt-0.5 block truncate text-sm text-fg">
                  adarsharma56763@gmail.com
                </span>
              </span>
            </a>

            <div className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-sage/12 text-accent-sage">
                <HiOutlineLocationMarker className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  Based in
                </span>
                <span className="mt-0.5 block text-sm text-fg">Pune, India</span>
              </span>
            </div>

            <div className="mt-2 flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-line/10 bg-surface-2/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="card p-6 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-muted"
                >
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-muted"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Let's talk about…"
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about the role, the project, or the problem…"
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative mt-6 w-full overflow-hidden rounded-xl bg-fg py-3 text-sm font-medium text-bg transition-opacity duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shimmer" />
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && (
              <p className="mt-3 text-center text-sm text-accent-sage">
                Message sent — I&apos;ll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-center text-sm text-red-400">{error}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default EmailSection;
