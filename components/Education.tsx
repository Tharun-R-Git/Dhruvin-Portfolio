type Education = {
  school: string;
  degree: string;
  detail: string;
  logo: string;
};

import Reveal from "./Reveal";

const education: Education[] = [
  {
    school: "Vellore Institute of Technology, Vellore",
    degree: "B.Tech, Computer Science & Engineering",
    detail: "2022 – 2026 · CGPA 9.04 / 10 · Vellore, India",
    logo: "/vit-logo.png",
  },
  {
    school: "D.G. Ruparel College of Arts, Science and Commerce",
    degree: "Class XI – XII (HSC)",
    detail: "Class XII · 81.0%",
    logo: "/logodgr.png",
  },
  {
    school: "St. Francis D'assisi High School and Junior College",
    degree: "Class I – X (SSC)",
    detail: "Class X · 96.2%",
    logo: "/logosfdhs.jpg",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-section">
      <div className="container mx-auto px-4">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">Education</h2>
          <div className="w-16 h-1 rounded mb-10 bg-gradient-to-r from-accent to-research" />
        </Reveal>

        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 90}>
              <div className="surface-metal rounded-xl border border-border p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left hover:-translate-y-1 hover:shadow-soft hover:border-accent/30 transition-all duration-300">
                <img
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  className="w-20 h-20 flex-shrink-0 rounded-xl border border-research/40 bg-white object-contain p-2"
                />
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">{edu.school}</h3>
                  <p className="text-foreground/80 font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
