import { useState, useRef, useEffect, useCallback } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { projects } from "../data/content";

const CARD_WIDTH = 300;
const CARD_GAP = 24;
const AUTOPLAY_MS = 3500;

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const wrapRef = useRef(null);
  const autoplayRef = useRef(null);

  const total = projects.length;

  const goTo = useCallback(
    (index) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  // Recompute transform whenever `current` changes or on resize
  useEffect(() => {
    const update = () => {
      if (!trackRef.current || !wrapRef.current) return;
      const wrapWidth = wrapRef.current.offsetWidth;
      const offset =
        current * (CARD_WIDTH + CARD_GAP) - (wrapWidth / 2 - CARD_WIDTH / 2);
      trackRef.current.style.transform = `translateX(${-offset}px)`;
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [current]);

  // Autoplay with pause-on-hover
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(autoplayRef.current);
  }, [total]);

  const pause = () => clearInterval(autoplayRef.current);
  const resume = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, AUTOPLAY_MS);
  };

  return (
    <section id="projects" className="section">
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-9">
          <div>
            <p className="text-xs text-[#a78bfa] tracking-[0.1em] uppercase mb-2">
              My work
            </p>
            <h2 className="section-title m-0">
              Selected <span className="gradient-text">projects</span>
            </h2>
          </div>

          <div className="flex gap-2.5">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => goTo(current - 1)}
              className="w-[42px] h-[42px] rounded-full border border-[#2d2a45] bg-[#15131f] text-white flex items-center justify-center hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => goTo(current + 1)}
              className="w-[42px] h-[42px] rounded-full border border-[#2d2a45] bg-[#15131f] text-white flex items-center justify-center hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        {/*
          items-center keeps every card vertically centered against the
          tallest one in the row, so cards with more tags / longer
          descriptions don't visually misalign the row.
        */}
        <div
          ref={wrapRef}
          onMouseEnter={pause}
          onMouseLeave={resume}
          className="relative overflow-hidden py-2.5 pb-8"
        >
          <div
            ref={trackRef}
            className="flex items-center gap-6 will-change-transform"
            style={{ transition: "transform 0.5s cubic-bezier(0.25,0.8,0.25,1)" }}
          >
            {projects.map((project, i) => {
              const isActive = i === current;
              const glyph = project.title
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (
                <article
                  key={project.title}
                  onClick={() => goTo(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") goTo(i);
                  }}
                  aria-label={`Show ${project.title} project`}
                  className="relative flex-shrink-0 rounded-[24px] overflow-hidden border transition-all duration-500 flex flex-col cursor-pointer"
                  style={{
                    width: CARD_WIDTH,
                    minHeight: 460,
                    background: "#15131f",
                    borderColor: isActive ? "#7c3aed" : "#232040",
                    opacity: isActive ? 1 : 0.45,
                    transform: isActive ? "scale(1)" : "scale(0.92)",
                    boxShadow: isActive
                      ? "0 0 40px rgba(124,58,237,0.25)"
                      : "none",
                  }}
                >
                  {/* ── Image area ── */}
                  <div
                    className="relative w-full overflow-hidden flex-shrink-0"
                    style={{ height: 160, background: "#1a1730" }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}

                    {/* Fallback gradient (also shown if image fails to load) */}
                    <div
                      className="absolute inset-0 items-center justify-center"
                      style={{
                        display: project.image ? "none" : "flex",
                        background:
                          "linear-gradient(165deg, #1a1730 0%, #0d0d1a 100%)",
                      }}
                    >
                      <span
                        className="font-black opacity-40"
                        style={{ fontSize: 38, color: "#7c3aed" }}
                      >
                        {glyph}
                      </span>
                    </div>

                    {/* Live status */}
                    {project.live && (
                      <div
                        className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(13,13,26,0.75)" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-[10px] text-gray-300 tracking-wide uppercase">
                          Live
                        </span>
                      </div>
                    )}
                  </div>

                  {/* ── Content ──
                      No forced line-clamp on the description anymore —
                      minHeight on the card + items-center on the row lets
                      each card grow naturally to fit its own text/tags
                      without clipping or colliding with the buttons below. */}
                  <div className="flex flex-col flex-1 p-6 pt-5">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div
                        className="flex items-center justify-center font-black rounded-lg flex-shrink-0"
                        style={{
                          width: 28,
                          height: 28,
                          fontSize: 11,
                          background: isActive ? "#7c3aed" : "#1e1b2e",
                          border: `1px solid ${isActive ? "#7c3aed" : "#2d2a45"}`,
                          color: isActive ? "#fff" : "#a78bfa",
                        }}
                      >
                        {glyph}
                      </div>
                      <h3 className="text-lg font-extrabold text-white leading-tight tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-[12.5px] text-gray-400 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md"
                          style={{
                            color: "#a78bfa",
                            background: "rgba(124,58,237,0.12)",
                            border: "1px solid rgba(124,58,237,0.3)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2.5" onClick={(e) => e.stopPropagation()}>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center text-xs font-bold py-2.5 rounded-[10px] text-white flex items-center justify-center gap-1.5"
                          style={{ background: "#7c3aed" }}
                        >
                          <ExternalLink size={13} /> Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center text-xs font-bold py-2.5 rounded-[10px] text-white flex items-center justify-center gap-1.5 border"
                          style={{ borderColor: "#2d2a45" }}
                        >
                          <Github size={13} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-2">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to project ${i + 1}`}
              onClick={() => goTo(i)}
              className="h-[7px] rounded-full transition-all duration-300"
              style={{
                width: i === current ? 22 : 7,
                background: i === current ? "#7c3aed" : "#2d2a45",
              }}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}