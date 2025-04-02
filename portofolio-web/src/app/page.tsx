import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import TechStackSection from "@/components/tech-stack-section";
import ProjectsSection from "@/components/projects-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
