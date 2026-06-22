"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex flex-col items-center">
      <div className="flex items-center gap-1.5 rounded-b-[2rem] border border-t-0 border-border/60 bg-background/70 backdrop-blur-xl glow-edge pl-9 pr-5 py-3">
        <a href="#" className="font-display text-xl font-semibold text-foreground pr-3">
          Dhruvin<span className="text-accent">.</span>Mehta
        </a>

        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[15px] font-medium text-muted-foreground hover:text-accent hover:bg-muted/70 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-[15px] font-medium text-muted-foreground hover:text-accent hover:bg-muted/70 transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 w-full max-w-xs rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl p-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-muted/70 transition-colors text-center"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-muted/70 transition-colors text-center"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
