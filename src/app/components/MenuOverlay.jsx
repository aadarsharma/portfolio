"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, active, onNavigate }) => (
  <motion.ul
    initial={{ opacity: 0, y: -12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl p-3 md:hidden"
  >
    {links.map((link) => (
      <li key={link.path}>
        <Link
          href={link.path}
          onClick={onNavigate}
          className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${
            active === link.path
              ? "bg-accent/12 text-fg"
              : "text-muted hover:bg-surface-2/70 hover:text-fg"
          }`}
        >
          {link.title}
        </Link>
      </li>
    ))}
  </motion.ul>
);

export default MenuOverlay;
