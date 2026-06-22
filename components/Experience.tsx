import Reveal from "./Reveal";

type Experience = {
  role: string;
  company: string;
  period: string;
  stack: string[];
  points: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "QSC, LLC",
    period: "Jan 2026 – Present",
    stack: ["JavaScript", "RabbitMQ", "PostgreSQL", "Testcontainers", "CI/CD"],
    points: [
      "Engineered organization status roll-up functionality within a JavaScript-based event-driven microservices architecture, leveraging RabbitMQ to process different event payloads and ensure analytics database consistency.",
      "Developed integration test suites across core entity workflows, leveraging PostgreSQL Testcontainers to create deterministic test environments, validate event-driven system behavior, and ensure CI/CD pipeline stability.",
      "Worked across 7 bug cycles, resolving schema mismatches, inconsistencies resulting from inaccurate backend data, and payload transformation failures between microservices.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">Experience</h2>
          <div className="w-16 h-1 rounded mb-10 bg-gradient-to-r from-accent to-research" />
        </Reveal>

        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 90}>
              <div className="surface-metal rounded-xl border border-border p-6 md:p-8 hover:-translate-y-1 hover:shadow-soft hover:border-accent/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">{exp.role}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <span className="self-start sm:self-auto text-sm font-medium text-muted-foreground border border-border rounded-full px-4 py-1.5 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-foreground/80 border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 text-muted-foreground">
                {exp.points.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
