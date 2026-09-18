import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-line/8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
      <div className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-sage font-mono text-sm font-bold text-bg">
          AS
        </span>
        <span className="text-sm font-medium text-fg">Aadarsh Sharma</span>
      </div>

      <p className="text-center text-xs text-muted">
        © {new Date().getFullYear()} Aadarsh Sharma. Built with Next.js &
        Tailwind CSS.
      </p>

      <Link
        href="#"
        className="font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        Back to top ↑
      </Link>
    </div>
  </footer>
);

export default Footer;
