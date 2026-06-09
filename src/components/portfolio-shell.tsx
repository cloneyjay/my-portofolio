import SideNav from "@/components/side-nav";
import SocialRail from "@/components/social-rail";

type PortfolioShellProps = {
  children: React.ReactNode;
};

export default function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:block lg:pl-60">
        <SideNav />
        <main className="min-w-0 px-6 py-8 sm:px-8 md:px-10 lg:px-14 lg:py-10 lg:pr-28">
          {children}
        </main>
        <SocialRail />
      </div>
    </div>
  );
}
