// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Blogs />
        <Contact />
      </main>
      <footer className="border-t border-white/10 mt-16">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400">
          © {new Date().getFullYear()} Ayesha Noor Khan — Built with Next.js
        </div>
      </footer>
    </div>
  );
}
