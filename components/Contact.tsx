import { Mail, Linkedin, Github, Download } from "lucide-react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 text-center">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Get in Touch</h2>
          <div className="w-16 h-1 rounded mb-6 bg-gradient-to-r from-accent to-research" />
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            I&apos;m always open to discussing new opportunities, collaborations, or just chatting about tech. Feel free to
            reach out!
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap items-center justify-center gap-4" delay={120}>
          <a
            href="mailto:dhruvindmehta@gmail.com"
            className="inline-flex items-center gap-2 h-11 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground hover:bg-accent/90 hover:-translate-y-0.5 transition-all shadow-soft"
          >
            <Mail size={16} /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/dhruvin-mehta-910b15259/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 rounded-md border border-border px-6 text-sm font-medium text-foreground hover:bg-muted hover:-translate-y-0.5 transition-all"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/dhruvin2968"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 rounded-md border border-border px-6 text-sm font-medium text-foreground hover:bg-muted hover:-translate-y-0.5 transition-all"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="/Dhruvin Mehta CV.pdf"
            download="Dhruvin Mehta CV.pdf"
            className="inline-flex items-center gap-2 h-11 rounded-md border border-border px-6 text-sm font-medium text-foreground hover:bg-muted hover:-translate-y-0.5 transition-all"
          >
            <Download size={16} /> Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
