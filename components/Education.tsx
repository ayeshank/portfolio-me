// components/Education.tsx
import portfolio from "@/data/portfolio";
import { Section, Card, Badge } from "./_ui";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-6">
        {portfolio.education.map((e, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex items-start gap-4">
              {e.logo && (
                <img
                  src={e.logo}
                  alt={`${e.school} logo`}
                  className="w-12 h-12 rounded-md object-contain"
                />
              )}
              <div className="flex-1">
                <h3 className="text-white font-semibold">{e.program}</h3>
                <p className="text-zinc-300">{e.school}</p>
                <div className="mt-1 flex flex-wrap gap-2 items-center">
                  <Badge>{e.years}</Badge>
                  {e.cgpa && <Badge>CGPA: {e.cgpa}</Badge>}
                </div>

                {e.courses && e.courses?.length > 0 && (
                  <details className="mt-4 group">
                    <summary className="cursor-pointer text-emerald-300 group-open:text-emerald-200">
                      Courses & Highlights
                    </summary>
                    <div className="mt-3 grid sm:grid-cols-2 gap-3">
                      {e.courses.map((c) => (
                        <Card key={c.name} className="p-4">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-white font-medium text-sm">
                              {c.name}
                            </h4>
                            {c.repo && (
                              <a
                                className="text-xs text-emerald-300 hover:text-emerald-200 underline"
                                href={c.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Repo
                              </a>
                            )}
                          </div>
                          <p className="mt-2 text-xs text-zinc-300">
                            {c.outcome}
                          </p>
                          {c.project && (
                            <p className="mt-2 text-xs text-zinc-400">
                              Project: {c.project}
                            </p>
                          )}
                        </Card>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
