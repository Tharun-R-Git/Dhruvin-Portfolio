"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Sparkle, SquareArrowOutUpRight, Maximize2, X } from "lucide-react";
import { projects } from "@/data";
import Reveal from "./Reveal";

type Project = (typeof projects)[number];

const ProjectCard = ({ project }: { project: Project }) => {
  const [zoomed, setZoomed] = useState(false);
  const hasLink = project.link && project.link !== "#";

  return (
    <article className="group rounded-xl border border-border surface-metal p-5 md:p-6 flex flex-col sm:flex-row items-stretch gap-5 md:gap-6 hover:-translate-y-1 hover:shadow-soft hover:border-accent/30 transition-all duration-300">
      <div
        onClick={() => setZoomed(true)}
        className="relative sm:w-56 md:w-64 flex-shrink-0 min-h-[10rem] cursor-pointer"
      >
        <img
          src={project.img}
          alt={`${project.title} preview`}
          className="h-full w-full min-h-[10rem] rounded-xl border border-research/40 bg-card object-cover"
        />
        <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/70 backdrop-blur px-2 py-1 text-[10px] font-medium text-white opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none">
          <Maximize2 size={11} /> Click to enlarge
        </span>
      </div>

      {zoomed &&
        createPortal(
          <div
            onClick={() => setZoomed(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in-up"
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setZoomed(false)}
                aria-label="Close"
                className="absolute top-2 right-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-md hover:bg-muted transition-colors"
              >
                <X size={18} />
              </button>
              <img
                src={project.img}
                alt={`${project.title} preview`}
                className="max-h-[72vh] max-w-[74vw] rounded-xl object-contain shadow-2xl"
              />
            </div>
          </div>,
          document.body
        )}

      <div className="flex-1 text-left">
        {hasLink ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 font-display text-2xl md:text-3xl font-bold text-foreground mb-3 leading-snug transition-colors group-hover:text-accent"
          >
            <span>{project.title}</span>
            <SquareArrowOutUpRight size={20} className="mt-1.5 flex-shrink-0 opacity-70" />
          </a>
        ) : (
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 leading-snug">
            {project.title}
          </h3>
        )}

        <p className="flex gap-2 text-sm text-muted-foreground leading-relaxed mb-4">
          <Sparkle size={15} className="mt-1 flex-shrink-0 text-accent" />
          <span>{project.des}</span>
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {project.iconLists.map((icon, i) => (
            <span
              key={i}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-muted border border-border transition-transform duration-200 hover:-translate-y-0.5"
            >
              <img src={icon} alt="" className="w-4 h-4" />
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-section">
      <div className="container mx-auto px-4">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">Projects</h2>
          <div className="w-16 h-1 rounded mb-10 bg-gradient-to-r from-accent to-research" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
