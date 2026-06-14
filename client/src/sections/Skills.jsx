import * as Icons from "lucide-react";
import Reveal from "../components/Reveal";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <h2 className="section-title">
          Skills & <span className="gradient-text">tools</span>
        </h2>
        <p className="section-subtitle">
          Technologies and concepts I work with regularly.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((group, i) => {
          const Icon = Icons[group.icon] || Icons.Code2;
          return (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="glass glass-hover p-6 rounded-2xl h-full">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
