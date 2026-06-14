import Reveal from "../components/Reveal";
import { about } from "../data/content";
import profileImg from "../public/assest/img.jpg";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <h2 className="section-title">
          About <span className="gradient-text">me</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-[280px_1fr] gap-10 items-center">
        <Reveal delay={0.1}>
          <div className="relative aspect-square rounded-2xl glass overflow-hidden group">
          
            <img
             src={profileImg}
              alt="Profile portrait"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primaryDark/30 to-transparent pointer-events-none" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="space-y-4 text-muted leading-relaxed">
            {about.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass glass-hover p-4 text-center rounded-xl"
              >
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
