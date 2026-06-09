import SectionReveal from "@/components/section-reveal";
import { skillGroups } from "@/lib/portfolio-data";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="grid scroll-mt-6 gap-10 border-t border-portfolio-line py-12 lg:grid-cols-[0.85fr_1.15fr]"
    >
      <SectionReveal>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-portfolio-accent">
          Technical Skills
        </p>
        <h2 className="mt-5 max-w-md text-4xl font-black leading-none tracking-[-0.05em] text-portfolio-text sm:text-5xl">
          Built around mobile, backed by web and APIs.
        </h2>
      </SectionReveal>

      <SectionReveal className="grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-lg border border-portfolio-line bg-portfolio-card p-5"
          >
            <h3 className="text-base font-bold text-portfolio-text">
              {group.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-portfolio-muted">
              {group.items.join(", ")}
            </p>
          </section>
        ))}
      </SectionReveal>
    </section>
  );
}
