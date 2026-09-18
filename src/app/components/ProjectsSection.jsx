import React from "react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projectData = [
  {
    id: 1,
    title: "TranSafer",
    description:
      "A full-stack digital wallet with P2P transfers by mobile number, real-time balance updates and a transactions dashboard. Built as a monorepo with clear API boundaries between a Next.js frontend and an Express.js backend, enforcing consistency across two simulated banking endpoints with transactional PostgreSQL + Prisma models.",
    stack: ["Next.js", "Express.js", "TypeScript", "Monorepo", "PostgreSQL", "Prisma"],
    gitUrl: "https://github.com/aadarsharma/Transafer",
    previewUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "SmartSlot",
    description:
      "An AI-powered delivery slot scheduler for e-commerce and logistics, framed as a discrete resource-allocation problem. Applies ML clustering to dynamically assign slots based on capacity, traffic and customer preference.",
    stack: ["Next.js", "TailwindCSS", "ML Clustering", "MongoDB"],
    gitUrl: "https://github.com/aadarsharma/SmartSlot",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Chess",
    description:
      "Real-time chess over WebSockets. Players connect and play against each other with moves synchronised live between both boards.",
    stack: ["WebSockets", "Node.js", "React.js"],
    gitUrl: "https://github.com/aadarsharma/chess",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Twitter Clone",
    description:
      "A social timeline rendering tweets from the accounts the current user follows.",
    stack: ["Next.js", "React.js", "MongoDB"],
    gitUrl: "https://github.com/aadarsharma/Twitter-Clone",
    previewUrl: "",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="scroll-mt-28 py-20 sm:py-28">
    <SectionHeading
      eyebrow="03 — Projects"
      title="Things I've built."
      description="Side projects and product work, from payment rails to scheduling models."
    />

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projectData.map((project, i) => (
        <Reveal
          key={project.id}
          delay={i * 0.07}
          className={`h-full ${project.featured ? "md:col-span-2 lg:col-span-3" : ""}`}
        >
          <ProjectCard {...project} />
        </Reveal>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
