import Image from "next/image";
import SectionReveal from "@/components/section-reveal";

export default function ProfileIntro() {
  return (
    <section
      id="profile"
      className="grid scroll-mt-6 gap-10 pb-12 md:grid-cols-[1fr_14rem] md:items-start lg:min-h-[24rem]"
    >
      <SectionReveal>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-portfolio-accent">
          Resume portfolio
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-portfolio-text sm:text-6xl md:text-7xl xl:text-8xl">
          Mobile apps, APIs, and product-ready flows.
        </h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-portfolio-muted sm:text-lg">
          Computer Science undergraduate expected to graduate in June 2027,
          focused on android development, full-stack development, and
          API-backed mobile products.
        </p>
      </SectionReveal>

      <div className="md:justify-self-end">
        <div className="relative size-44 overflow-hidden rounded-full border border-portfolio-line bg-portfolio-panel sm:size-52">
          <Image
            src="/jamesprofile.jpeg"
            alt="James Angatia"
            fill
            priority
            sizes="208px"
            className="object-cover grayscale"
          />
        </div>
        <div className="mt-5 rounded-lg border border-portfolio-line bg-portfolio-card p-4">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-portfolio-dim">
            Core stack
          </p>
          <p className="mt-2 text-lg font-bold text-portfolio-text">
            Kotlin / Flutter / Next.js
          </p>
        </div>
      </div>
    </section>
  );
}
