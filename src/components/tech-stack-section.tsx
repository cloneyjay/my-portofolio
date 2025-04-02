"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import CardSlider from "./ui/card-slider";

type TechItem = {
  name: string;
  icon: string;
  color: string;
};

const techStack: TechItem[] = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#38B2AC" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
];

export default function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile for responsive adjustments
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  // Create tech stack cards
  const techStackCards = techStack.map((tech, index) => (
    <motion.div
      key={tech.name}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group hover:-translate-y-2 h-full"
      style={{ borderTop: `3px solid ${tech.color}` }}
    >
      <div className="w-12 h-12 mb-4 relative">
        <Image 
          src={tech.icon} 
          alt={tech.name} 
          width={48} 
          height={48} 
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-sm font-medium text-center">{tech.name}</h3>
    </motion.div>
  ));

  return (
    <section
      id="tech-stack"
      ref={containerRef}
      className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent dark:from-primary-foreground dark:via-accent-foreground dark:to-secondary-foreground">
            TECH STACK
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Card slider for all screen sizes */}
        <div className="w-full">
          <CardSlider
            cardWidth={isMobile ? 140 : 200}  // Smaller cards for tech stack
            gap={isMobile ? 8 : 16}  // Smaller gap for tech stack
            showArrows={true}
            showDots={true}
            autoPlay={true}
            autoPlayInterval={3000}
          >
            {techStackCards}
          </CardSlider>
        </div>
      </div>
    </section>
  );
}