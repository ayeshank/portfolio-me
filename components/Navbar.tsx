// components/Navbar.tsx
"use client";

const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#education", label: "EDUCATION" },
  { href: "#blogs", label: "BLOGS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 bg-zinc-950/80 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6 text-sm">
        <a href="#about" className="font-bold text-white">
          Ayesha Noor Khan
        </a>
        <div className="ml-auto flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md px-2 py-1"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
