import Reveal from "./Reveal";

const achievements = [
  {
    icon: "🏆",
    title: "IEEE Best Paper Award — IC5PS 2026",
    desc: "Co-authored and published “SilentBridge: A Multimodal ISL Translator Full Stack System Using NLP and Vision-Based Learning”.",
  },
  {
    icon: "🥇",
    title: "VIT TopCoder Recognition",
    desc: "Awarded to the top 5% of students for consistent excellence in competitive programming and algorithmic problem-solving.",
  },
  {
    icon: "💻",
    title: "Algorithmic Proficiency",
    desc: "Solved 250+ Data Structures & Algorithms problems on LeetCode.",
  },
  {
    icon: "🌍",
    title: "Mathematics Olympiad",
    desc: "Secured International Rank 1 in the International Olympiad of Mathematics (IOM '11).",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto px-4">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">
            Publications &amp; Achievements
          </h2>
          <div className="w-16 h-1 rounded mb-10 bg-gradient-to-r from-accent to-research" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full flex gap-4 rounded-xl border border-border surface-metal p-6 hover:-translate-y-1 hover:shadow-soft hover:border-accent/30 transition-all duration-300">
                <span className="text-3xl sm:text-4xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
