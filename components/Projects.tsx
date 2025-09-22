// components/Projects.tsx
import portfolio from "@/data/portfolio";
import { Section, Card, Badge } from "./_ui";
import ImageSliderModal from "./ImageSliderModal";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {portfolio.projects.map((p, idx) => (
          <Card key={idx} className="overflow-hidden">
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tags?.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <h3 className="text-white font-semibold text-lg">{p.name}</h3>
              <p className="mt-2 text-zinc-300">{p.description}</p>
              {p.repo && (
                <a
                  className="mt-3 inline-block text-emerald-300 hover:text-emerald-200 underline"
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code →
                </a>
              )}
            </div>
            <ImageSliderModal
              images={p.images ?? []}
              ariaLabel={`Open gallery for ${p.name}`}
              className="block"
              // optional: custom preview content (else it shows default)
              // preview={
              //   <img
              //     src={p.images?.[0] ?? ""}
              //     alt={`${p.name} preview`}
              //     className="w-full h-56 object-cover cursor-pointer"
              //   />
              // }
            />
          </Card>
        ))}
      </div>
    </Section>
  );
}
