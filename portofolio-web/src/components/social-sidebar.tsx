"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, Github, BookOpen } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    href: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: <Twitter size={20} />,
    href: "https://twitter.com",
  },
  {
    name: "YouTube",
    icon: <Youtube size={20} />,
    href: "https://youtube.com",
  },
  {
    name: "GitHub",
    icon: <Github size={20} />,
    href: "https://github.com",
  },
  {
    name: "Blog",
    icon: <BookOpen size={20} />,
    href: "/blog",
  },
];

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col items-center space-y-6"
    >
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
          aria-label={link.name}
        >
          {link.icon}
        </Link>
      ))}
      <div className="h-20 w-px bg-gray-300 dark:bg-gray-700 mt-4"></div>
    </motion.div>
  );
}