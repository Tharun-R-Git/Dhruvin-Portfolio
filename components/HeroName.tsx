"use client";
import { motion, type Variants } from "framer-motion";

const name = "Dhruvin Mehta";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.0625, delayChildren: 0.1875 },
  },
};

const letter: Variants = {
  hidden: { y: 70, opacity: 0, rotateX: -60 },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { type: "spring", damping: 11, stiffness: 128 },
  },
};

const HeroName = () => {
  return (
    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.95] mb-8">
      <motion.span
        variants={container}
        initial="hidden"
        animate="show"
        className="inline-block"
        style={{ perspective: 800 }}
      >
        {name.split("").map((ch, i) => (
          <motion.span key={i} variants={letter} className="inline-block origin-bottom">
            {ch === " " ? " " : ch}
          </motion.span>
        ))}
        <motion.span variants={letter} className="inline-block text-accent">
          .
        </motion.span>
      </motion.span>
      <br />
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25, duration: 0.875, ease: "easeOut" }}
        className="inline-block"
      >
        <span className="italic text-gradient-accent">building &amp; </span>
        <span className="italic text-gradient-warm">shipping</span>
      </motion.span>
    </h1>
  );
};

export default HeroName;
