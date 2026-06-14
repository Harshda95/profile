import { Github, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <h2 className="section-title">
          Featured <span className="gradient-text">projects</span>
        </h2>
        <p className="section-subtitle">
          A selection of things I've built — frontend apps, full-stack projects, and experiments.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <article className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col group">
              <div className="aspect-video bg-surface relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                {project.featured && (
                  <span className="absolute top-3 left-3 tag bg-background/60">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-muted mt-2 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-5 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted hover:text-white transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
