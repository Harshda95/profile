import { motion } from "framer-motion";

/**
 * Wraps children with a fade-up reveal animation triggered on scroll.
 * Usage: <Reveal delay={0.1}><YourContent /></Reveal>
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
