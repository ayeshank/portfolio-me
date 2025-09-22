// components/Experience.tsx
import portfolio from "../data/portfolio";
import { Section, Card, Badge } from "./_ui";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-6">
        {portfolio.experience.map((exp, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <h3 className="text-white font-semibold text-lg">{exp.title}</h3>
              <Badge>{exp.range}</Badge>
            </div>
            <ul className="mt-4 list-disc pl-6 text-zinc-300 space-y-1">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
