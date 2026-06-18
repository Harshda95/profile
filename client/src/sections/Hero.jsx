import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile, about } from "../data/content";
import PhoneMockup from "./PhoneMockup";

// Stagger container — children animate in sequence
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.6 } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Slow ambient drift for the corner glows — sits still if the user prefers reduced motion
  const glowOneMotion = reduceMotion
    ? undefined
    : { x: [0, 60, -20, 0], y: [0, 40, -30, 0], scale: [1, 1.12, 0.96, 1] };
  const glowTwoMotion = reduceMotion
    ? undefined
    : { x: [0, -50, 30, 0], y: [0, -35, 25, 0], scale: [1, 0.92, 1.08, 1] };

  // Gentle backlight pulse behind the phone mockup
  const phoneGlowMotion = reduceMotion
    ? undefined
    : { scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] };

  return (
    <section id="hero" className="relative z-0 overflow-hidden">

      {/* Ambient gradient backdrop — same corner-glow colors as the gradient-radial token, now alive */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-20 -left-20 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.35), transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={glowOneMotion}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-28 -right-20 w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.22), transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={glowTwoMotion}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section relative z-10">
      <div className="grid md:grid-cols-[1fr_220px] gap-10 items-center pt-10 md:pt-0">


        
        <motion.div
          className="flex flex-col justify-center"
          variants={container}
          initial="hidden"
          animate="show"
        >

         
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            
            <span className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] uppercase text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {profile.status}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.01] tracking-[-0.035em] text-[#f0eeff] m-0"
          >
            Hi, I'm
            <br />
            <span className="text-[#c4b8f0]">
              {profile.name}<span className="text-primary">.</span>
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p variants={fadeUp} className="mt-6 text-sm text-muted leading-relaxed">
            <strong className="text-[#8a85b0] font-medium">{profile.role}</strong>
            &nbsp;·&nbsp; {profile.tagline}
          </motion.p>

          {/* Divider */}
          <motion.span
            variants={fadeUp}
            className="block my-6 w-8 h-px"
            style={{ background: "#ba85b1" }}
          />

          {/* Tagline from bio */}
          <motion.p
            variants={fadeUp}
            className="text-xs text-[#3d3c54] italic leading-relaxed tracking-wide"
          >
            {about.bio[0]}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex items-center flex-wrap gap-3 mt-8">
            <a
              href="#projects"
              className="btn-primary flex items-center gap-2 text-xs px-6 py-3 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
            >
              View projects <ArrowRight size={13} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary flex items-center gap-2 text-xs px-5 py-3 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Download size={13} /> Download resume
            </a>
          </motion.div>

          {/* Stats from content.js */}
          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-4">
            {about.stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="glass glass-hover p-4 text-center rounded-xl cursor-default"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Phone ── */}
        <motion.div
          className="hidden md:flex items-center justify-center"
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="relative z-0 w-[200px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Backlight glow behind the phone */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(124,58,237,0.5), transparent 70%)",
                filter: "blur(50px)",
              }}
              animate={phoneGlowMotion}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <PhoneMockup />
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: 200,
                  background: "linear-gradient(to bottom, transparent, rgba(7,7,14,0.97) 80%)",
                  borderRadius: "0 0 34px 34px",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
      </div>
    </section>
  );
}