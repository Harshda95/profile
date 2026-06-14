import Reveal from "../components/Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <h2 className="section-title">
          Work <span className="gradient-text">experience</span>
        </h2>
        <p className="section-subtitle">
          Internships, programs, and contributions that shaped my skills.
        </p>
      </Reveal>

      <div className="mt-12 relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        <div className="space-y-10">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.1}>
              <div className="relative pl-10">
                <span
                  className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary ${
                    i === 0 ? "bg-primary" : "bg-background"
                  }`}
                />
                <div className="glass glass-hover p-6 rounded-2xl">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-semibold">
                      {item.role} ·{" "}
                      <span className="text-primary">{item.company}</span>
                    </h3>
                    <span className="text-xs text-muted font-mono">
                      {item.duration}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted list-disc list-inside">
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
