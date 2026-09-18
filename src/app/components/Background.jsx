import React from "react";

const Background = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
  >
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/25 blur-[110px] animate-aurora" />
    <div className="absolute -right-32 top-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-sage/15 blur-[130px] animate-aurora-slow" />
    <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent-cream/10 blur-[140px] animate-float" />
    <div className="absolute inset-0 noise opacity-[0.05] mix-blend-overlay dark:opacity-[0.07]" />
  </div>
);

export default Background;
