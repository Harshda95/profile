import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 text-center text-xs text-muted">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Node.
      </p>
    </footer>
  );
}
