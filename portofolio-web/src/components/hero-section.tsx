"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

type MousePosition = {
  x: number;
  y: number;
};

const calculateTilt = (mousePosition: MousePosition, element: HTMLDivElement) => {
  const rect = element.getBoundingClientRect();
  const x = mousePosition.x - rect.left;
  const y = mousePosition.y - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const tiltX = ((y - centerY) / centerY) * 10;
  const tiltY = ((centerX - x) / centerX) * 10;
  
  return { tiltX, tiltY };
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ tiltX: 0, tiltY: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (contentRef.current) {
        const newTilt = calculateTilt({ x: e.clientX, y: e.clientY }, contentRef.current);
        setTilt(newTilt);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 dark:from-primary/10 dark:via-accent/10 dark:to-secondary/10 -z-10" />
      <motion.div 
        className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-3xl dark:from-primary/10 dark:via-accent/10 dark:to-secondary/10 -z-10"
        animate={{
          x: [-100, 100],
          y: [-100, 100],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        ref={contentRef}
        className="container mx-auto px-4"
        style={{ 
          opacity, 
          scale,
          transform: `perspective(1000px) rotateX(${tilt.tiltX}deg) rotateY(${tilt.tiltY}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent dark:from-primary-foreground dark:via-accent-foreground dark:to-secondary-foreground"
          >
            HEY, I'M JAMES ANGATIA
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/#projects">
              <Button 
                variant="default"
                className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-primary-foreground font-medium px-6 py-6 rounded-md text-base group transition-all duration-300 hover:scale-105"
              >
                <span className="mr-2">PROJECTS</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
            
            <Link href="/resume.pdf" target="_blank">
              <Button 
                variant="outline"
                className="border-primary hover:bg-primary hover:text-primary-foreground font-medium px-6 py-6 rounded-md text-base transition-all duration-300 hover:scale-105"
              >
                <span>RESUME</span>
              </Button>
            </Link>
            
            <Link href="/#contact">
              <Button 
                variant="secondary"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium px-6 py-6 rounded-md text-base transition-all duration-300 hover:scale-105"
              >
                <span>HIRE ME</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}