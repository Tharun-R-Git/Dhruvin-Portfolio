import { Code2, Cpu } from "lucide-react";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="section-padding bg-section">
      <div className="container mx-auto px-4">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">About Me</h2>
          <div className="w-16 h-1 rounded mb-10 bg-gradient-to-r from-accent to-research" />
        </Reveal>

        <Reveal className="max-w-3xl mx-auto text-center" delay={120}>
          <img
            src="/cropped-image.png"
            alt="Dhruvin Mehta"
            className="logo-glow mx-auto mb-8 w-36 h-36 rounded-full border border-research/40 object-cover transition-transform duration-300 hover:scale-105"
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            I&apos;m an <span className="text-foreground font-medium">R&amp;D Engineer @ QSC</span>, based in Mumbai, India — a
            motivated Computer Science engineer with a knack for <span className="text-accent font-medium">front-end development</span>,
            <span className="text-research font-medium"> machine learning</span>, and system design. I&apos;m a curious mind who
            enjoys building, breaking, and fixing things — especially in tech.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Skilled in React.js, Java, and Python, I&apos;m excited by real-world challenges, especially those that blend UI/UX
            with intelligence — from intuitive interfaces to smart recommendations. Off-screen? You&apos;ll find me cycling,
            playing chess, or vibing to music. A strong believer in learning by doing — growth over perfection.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-transform duration-200 hover:-translate-y-0.5 bg-accent/10 text-accent">
              <Code2 size={12} /> Full-Stack Development
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-transform duration-200 hover:-translate-y-0.5 bg-research/10 text-research">
              <Cpu size={12} /> Machine Learning
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
