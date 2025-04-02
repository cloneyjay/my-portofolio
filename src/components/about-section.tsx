"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FileText, Mail, ExternalLink } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section 
      id="about"
      ref={containerRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent dark:from-primary-foreground dark:via-accent-foreground dark:to-secondary-foreground">
            ABOUT ME
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ opacity, scale }}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <Image 
              src="/jamesangatia.jpg"
              alt="James Angatia" 
              width={500} 
              height={500} 
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Frontend Developer & UI/UX Enthusiast</h3>
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm James Angatia, a passionate frontend developer based in Nairobi, Kenya. 
              I specialize in creating responsive, user-friendly web applications that deliver 
              exceptional user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I've worked on a variety of projects 
              ranging from small business websites to complex web applications. My goal is to build 
              products that are not only visually appealing but also functional and accessible to all users.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/resume.pdf" target="_blank">
                <Button 
                  variant="outline" 
                  className="border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </Link>
              <Link href="/#contact">
                <Button 
                  className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-primary-foreground transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Hire Me
                </Button>
              </Link>
            </div>
            
            {/* Freelancer Platforms Section */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Find me on freelancer platforms:</h4>
              <div className="flex flex-wrap gap-3">
                <Link href="https://www.upwork.com/profile" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="border-[#6FDA44] text-[#6FDA44] hover:bg-[#6FDA44] hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Upwork
                  </Button>
                </Link>
                <Link href="https://www.freelancer.com/profile" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="border-[#29B2FE] text-[#29B2FE] hover:bg-[#29B2FE] hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Freelancer.com
                  </Button>
                </Link>
                <Link href="https://www.fiverr.com/profile" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="border-[#1DBF73] text-[#1DBF73] hover:bg-[#1DBF73] hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Fiverr
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}