"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard, { Project } from "@/components/project-card";
import CardSlider from "./ui/card-slider";
import axios from "axios";

// Mock data for initial development
const mockProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform built with React and Node.js",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    thumbnail_url: "/project1.jpg",
    demo_url: "https://example.com/demo1",
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing my skills and projects",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    thumbnail_url: "/project2.jpg",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A task management application with drag and drop functionality",
    tags: ["React", "TypeScript", "Firebase"],
    thumbnail_url: "/project3.jpg",
    demo_url: "https://example.com/demo3",
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Uncomment when backend is ready
        // const response = await axios.get('http://localhost:8000/api/projects/');
        // setProjects(response.data);
        
        // Using mock data for now
        setTimeout(() => {
          setProjects(mockProjects);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PROJECTS</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here you will find some of the personal and client projects that I created with each project containing its own case study
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <>
            {/* Card slider for all screen sizes */}
            <div className="w-full">
              <CardSlider
                cardWidth={isMobile ? 260 : 350}  // Adjusted card width
                gap={isMobile ? 12 : 20}  // Reduced gap on mobile
                showArrows={true}
                showDots={true}
                autoPlay={false}
              >
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </CardSlider>
            </div>
          </>
        )}
      </div>
    </section>
  );
}