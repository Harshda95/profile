import * as Icons from "lucide-react";
import Reveal from "../components/Reveal";
import { achievements } from "../data/content";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <Reveal>
        <h2 className="section-title">
          Achievements & <span className="gradient-text">certificates</span>
        </h2>
        <p className="section-subtitle">
          Milestones, certifications, and proof of consistency.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((item, i) => {
          const Icon = Icons[item.icon] || Icons.Award;
          const Wrapper = item.link ? "a" : "div";
          const wrapperProps = item.link
            ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Reveal key={item.title} delay={i * 0.06}>
              <Wrapper
                {...wrapperProps}
                className="glass glass-hover p-6 rounded-2xl flex items-start gap-4 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs text-muted mt-1">{item.description}</p>
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
