import SectionReveal from "@/components/section-reveal";
import { experience, honors, socialLinks } from "@/lib/portfolio-data";

export default function ResumeDetails() {
  return (
    <>
      <section
        id="experience"
        className="grid scroll-mt-6 gap-10 border-t border-portfolio-line py-12 lg:grid-cols-2"
      >
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-portfolio-accent">
            Experience
          </p>
          <div className="mt-6 grid gap-8">
            {experience.map((entry) => (
              <article key={entry.title}>
                <h2 className="text-2xl font-black tracking-[-0.03em] text-portfolio-text">
                  {entry.title}
                </h2>
                <p className="mt-1 text-sm text-portfolio-dim">
                  {entry.organization}
                </p>
                <ul className="mt-4 grid gap-2 text-sm leading-7 text-portfolio-muted">
                  {entry.details.map((detail, index) => (
                    <li key={`${entry.title}-${index}`}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="education" className="scroll-mt-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-portfolio-accent">
            Education / Honors
          </p>
          <h2 className="mt-6 text-2xl font-black tracking-[-0.03em] text-portfolio-text">
            BSc. Computer Science
          </h2>
          <p className="mt-2 text-sm leading-7 text-portfolio-muted">
            Kenyatta University, Nairobi, Kenya. Expected graduation: June 2027.
          </p>
          <div className="mt-6 grid gap-3">
            {honors.map((honor) => (
              <div
                key={honor}
                className="rounded-lg border border-portfolio-line bg-portfolio-card p-4 text-sm text-portfolio-muted"
              >
                {honor}
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section
        id="contact"
        className="scroll-mt-6 border-t border-portfolio-line py-12"
      >
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-portfolio-accent">
            Contact
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.05em] text-portfolio-text sm:text-5xl">
              Have a mobile product, internship, or junior role worth
              discussing?
            </h2>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  className="flex size-11 items-center justify-center rounded-full border border-transparent bg-portfolio-card text-portfolio-text transition hover:text-portfolio-accent"
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                  }
                  aria-label={label}
                  title={label}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
