import PortfolioShell from "@/components/portfolio-shell";
import ProfileIntro from "@/components/profile-intro";
import ResumeDetails from "@/components/resume-details";
import SelectedWork from "@/components/selected-work";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <PortfolioShell>
      <ProfileIntro />
      <SelectedWork />
      <SkillsSection />
      <ResumeDetails />
    </PortfolioShell>
  );
}
