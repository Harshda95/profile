import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-radial"
    >
      {/* Animated background orbs */}
      <div className="bg-orb w-[28rem] h-[28rem] bg-primaryDark -top-32 -left-32" />
      <div
        className="bg-orb w-[24rem] h-[24rem] bg-primary -bottom-24 -right-24"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-muted mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {profile.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          Hi, I'm{" "}
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-lg text-muted"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-2 text-sm text-muted/70 font-mono"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            View projects <ArrowRight size={16} />
          </a>
          <a href={profile.resumeUrl} download className="btn-secondary">
            <Download size={16} /> Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
