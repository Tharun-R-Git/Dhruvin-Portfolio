import { ArrowDown, Code2, Sparkles } from "lucide-react";
import HeroName from "./HeroName";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-32 pb-16">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
            <Code2 size={12} /> R&amp;D Engineer &amp; Full Stack Developer
          </span>
        </div>

        <HeroName />

        <p
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          R&amp;D Engineer @ <span className="text-foreground">QSC</span>, based in Mumbai, India — a curious mind who
          enjoys building, breaking, and fixing things, working across <span className="text-foreground">full-stack web</span>,
          machine learning, and system design.
        </p>

        <div
          className="flex items-center justify-center gap-3 animate-fade-in-up"
          style={{ animationDelay: "0.375s" }}
        >
          <a
            href="#projects"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-7 text-sm font-medium text-accent-foreground hover:bg-accent/90 hover:-translate-y-0.5 transition-all shadow-soft"
          >
            <Sparkles size={14} /> View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-7 text-sm font-medium text-foreground hover:bg-muted hover:-translate-y-0.5 transition-all"
          >
            Get in Touch
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex mt-20 text-muted-foreground hover:text-accent transition-colors animate-bounce-soft"
          aria-label="Scroll to about"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
