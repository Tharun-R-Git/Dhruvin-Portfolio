"use client";
import { Code, Server, Database, Terminal, Wrench, Languages } from "lucide-react";
import Reveal from "./Reveal";

// Simple Icons CDN slugs for skills that have a real brand logo.
const iconSlug: Record<string, string> = {
  "React.js": "react",
  HTML: "html5",
  CSS: "css3",
  JavaScript: "javascript",
  Tailwind: "tailwindcss",
  Bootstrap: "bootstrap",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  RabbitMQ: "rabbitmq",
  Firebase: "firebase",
  "Socket.io": "socketdotio",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  "Firebase (Firestore)": "firebase",
  "C++": "cplusplus",
  Python: "python",
  Java: "openjdk",
  Postman: "postman",
  "MongoDB Compass": "mongodb",
  GitHub: "github",
  Figma: "figma",
};

// Logos that are near-black and need a light fill to stay visible on the dark theme.
const lightFill = new Set(["github", "express", "socketdotio"]);

const iconUrl = (slug: string) =>
  `https://cdn.simpleicons.org/${slug}${lightFill.has(slug) ? "/e5e7eb" : ""}`;

const skillGroups = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "RabbitMQ", "Firebase", "Socket.io"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase (Firestore)"],
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: ["Java", "C++", "Python"],
  },
  {
    title: "Dev Tools",
    icon: Wrench,
    skills: ["Postman", "VSCode", "MongoDB Compass", "GitHub", "Figma"],
  },
  {
    title: "Languages Spoken",
    icon: Languages,
    skills: ["English", "Hindi", "Marathi", "Gujarati"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-section">
      <div className="container mx-auto px-4">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">Skills &amp; Toolkit</h2>
          <div className="w-16 h-1 rounded mb-10 bg-gradient-to-r from-accent to-research" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={i * 80}>
              <div
                className="h-full rounded-xl border border-border surface-metal p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-soft hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-foreground">{group.title}</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {group.skills.map((skill) => {
                    const slug = iconSlug[skill];
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-md bg-muted text-foreground/80 border border-border"
                      >
                        {slug && (
                          <img
                            src={iconUrl(slug)}
                            alt=""
                            className="w-4 h-4"
                            loading="lazy"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.display = "none";
                            }}
                          />
                        )}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
