import { useState } from "react";
import { Github, Linkedin, Mail, Send, Code2, Loader2 } from "lucide-react";
import Reveal from "../components/Reveal";
import { profile } from "../data/content";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const socialLinks = [
  { label: "GitHub", icon: Github, href: profile.socials.github },
  { label: "LinkedIn", icon: Linkedin, href: profile.socials.linkedin },
  { label: "LeetCode / DSA log", icon: Code2, href: profile.socials.leetcode },
  { label: "Email", icon: Mail, href: `mailto:${profile.email}` },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus({ state: "success", message: data.message });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  };

  return (
    <section id="contact" className="section">
      <Reveal>
        <h2 className="section-title">
          Let's <span className="gradient-text">connect</span>
        </h2>
        <p className="section-subtitle">
          Open to internships, collaborations, or just a chat about DSA and frontend dev.
        </p>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass p-6 rounded-2xl space-y-4">
            <div>
              <label htmlFor="name" className="text-xs text-muted">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs text-muted">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs text-muted">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="What would you like to talk about?"
              />
            </div>

            <button
              type="submit"
              disabled={status.state === "loading"}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status.state === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>

            {status.state === "success" && (
              <p className="text-sm text-green-400">{status.message}</p>
            )}
            {status.state === "error" && (
              <p className="text-sm text-red-400">{status.message}</p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass p-6 rounded-2xl h-full flex flex-col justify-center gap-4">
            <p className="text-sm text-muted">
              Prefer a direct route? Reach out via any of these:
            </p>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm">{link.label}</span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
