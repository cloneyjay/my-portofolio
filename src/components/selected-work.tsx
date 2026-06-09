import { ExternalLink } from "lucide-react";
import SectionReveal from "@/components/section-reveal";
import { projects } from "@/lib/portfolio-data";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="scroll-mt-6 border-t border-portfolio-line py-12"
    >
      <SectionReveal>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-portfolio-accent">
          Selected Work
        </p>

        <div className="mt-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-5 border-t border-portfolio-line py-7 md:grid-cols-[8rem_1fr] xl:grid-cols-[9rem_1fr_13rem]"
            >
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-portfolio-dim">
                {project.index} / {project.category}
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-[-0.03em] text-portfolio-text sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-portfolio-muted sm:text-base">
                  {project.description}
                </p>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-portfolio-accent transition hover:text-portfolio-text"
                  >
                    View repository
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-2 xl:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="h-fit rounded-full border border-portfolio-line px-3 py-1.5 text-xs text-portfolio-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
