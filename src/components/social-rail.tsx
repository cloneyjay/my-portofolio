import { socialLinks } from "@/lib/portfolio-data";

export default function SocialRail() {
  return (
    <aside
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-transparent bg-portfolio-panel/90 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-md lg:block"
      aria-label="Social links"
    >
      <div className="grid gap-2">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={label}
            title={label}
            className="flex size-11 items-center justify-center rounded-full border border-transparent text-portfolio-text transition hover:bg-portfolio-card hover:text-portfolio-accent"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        ))}
      </div>
    </aside>
  );
}
