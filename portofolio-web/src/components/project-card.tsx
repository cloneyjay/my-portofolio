"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail_url: string;
  demo_url?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gradient-to-br from-background via-background to-background dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(var(--primary-rgb), 0.15),
              transparent 80%
            )
          `,
        }}
      />
        <motion.div 
          className="relative h-48 w-full overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.thumbnail_url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        <div className="p-6 relative z-10">
          <motion.h3 
            className="text-xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent dark:from-primary-foreground dark:via-accent-foreground dark:to-secondary-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-muted-foreground text-sm mb-4 line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.description}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-xs font-medium backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          <Link
            href={`/projects/${project.id}`}
            className="group inline-flex items-center space-x-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200"
          >
            <span>View Details</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </Link>
      </div>
    </motion.div>
  );
}