import { navItems } from "@/lib/portfolio-data";

export default function SideNav() {
  return (
    <aside className="hidden border-portfolio-line bg-portfolio-panel/80 px-6 py-6 lg:fixed lg:left-0 lg:top-0 lg:z-30 lg:flex lg:min-h-screen lg:w-60 lg:flex-col lg:justify-between lg:border-r lg:py-8">
      <div>
        <a
          href="#profile"
          className="block text-2xl font-black leading-none tracking-tight text-portfolio-text"
        >
          James
          <br />
          Angatia
        </a>
        <p className="mt-4 text-sm leading-6 text-portfolio-muted">
          Mobile product engineer
          <br />
          Nairobi, Kenya
        </p>

        <nav
          className="mt-8 grid gap-0 lg:mt-12"
          aria-label="Portfolio sections"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="grid grid-cols-[2.25rem_1fr] items-center gap-3 border-b border-portfolio-line/70 py-3 text-sm text-portfolio-muted transition hover:text-portfolio-text"
            >
              <span className="font-mono text-xs text-portfolio-dim">
                {item.index}
              </span>
              <span className="font-semibold">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-8 border-t border-portfolio-line pt-5 lg:mt-0">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-portfolio-dim">
          Status
        </p>
        <p className="mt-3 text-sm leading-6 text-portfolio-accent">
          Open to mobile internships and junior developer roles
        </p>
      </div>
    </aside>
  );
}
