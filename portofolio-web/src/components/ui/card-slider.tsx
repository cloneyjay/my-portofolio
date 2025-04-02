"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./card-slider.css";

interface CardSliderProps {
  children: React.ReactNode[];
  title?: string;
  description?: string;
  cardWidth?: number; // Width in pixels
  gap?: number; // Gap between cards in pixels
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number; // in milliseconds
  className?: string;
}

export default function CardSlider({
  children,
  title,
  description,
  cardWidth = 280,
  gap = 16,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  className = "",
}: CardSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate how many cards can be visible at once
  const calculateVisibleCards = () => {
    if (!containerRef.current) return 1;
    const containerWidth = containerRef.current.clientWidth;
    return Math.max(1, Math.floor(containerWidth / (cardWidth + gap)));
  };

  const [visibleCards, setVisibleCards] = useState(1);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (sliderRef.current && containerRef.current) {
        setSliderWidth(sliderRef.current.scrollWidth);
        setContainerWidth(containerRef.current.clientWidth);
        setVisibleCards(calculateVisibleCards());
      }
    };

    // Initial update
    updateDimensions();

    // Add a small delay to ensure accurate measurements after DOM is fully rendered
    const timeoutId = setTimeout(updateDimensions, 100);

    // Add resize listener
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timeoutId);
    };
  }, [children, cardWidth, gap]);

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      if (currentIndex < children.length - visibleCards) {
        handleNext();
      } else {
        setCurrentIndex(0);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex, children.length, visibleCards]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(children.length - visibleCards, prev + 1));
  };

  // Function to handle pagination dot click with smooth animation
  const handleDotClick = (index: number) => {
    // Ensure we don't exceed the maximum valid index
    const maxValidIndex = Math.max(0, children.length - visibleCards);
    const safeIndex = Math.min(index, maxValidIndex);
    setCurrentIndex(safeIndex);
  };

  // Calculate if we can scroll in either direction
  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < children.length - visibleCards;

  // Calculate the number of dots needed
  const dotsCount = Math.max(1, children.length - visibleCards + 1);

  return (
    <div className={`w-full ${className}`}>
      {/* Title and description */}
      {(title || description) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
          {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
        </div>
      )}

      {/* Slider container with navigation arrows */}
      <div className="relative card-slider-container" ref={containerRef}>
        {showArrows && (
          <>
            <button
              onClick={handlePrev}
              disabled={!canScrollPrev}
              className={`card-slider-arrow absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm ${
                canScrollPrev ? "" : "cursor-not-allowed"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canScrollNext}
              className={`card-slider-arrow absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm ${
                canScrollNext ? "" : "cursor-not-allowed"
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Cards container */}
        <div
          className="overflow-hidden py-4"
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <motion.div
            ref={sliderRef}
            className="card-slider-track"
            style={{
              gap: `${gap}px`,
              width: `${(cardWidth + gap) * children.length}px`, // Set explicit width based on number of slides
            }}
            animate={{
              x: -currentIndex * (cardWidth + gap),
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              mass: 0.5,
            }}
            drag="x"
            dragConstraints={{
              left: -(children.length - visibleCards) * (cardWidth + gap),
              right: 0,
            }}
            dragElastic={0.2}
            dragMomentum={true}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const swipeThreshold = cardWidth / 4;
              const velocity = info.velocity.x;
              const offset = info.offset.x;

              if (Math.abs(velocity) > 500 || Math.abs(offset) > swipeThreshold) {
                const direction = offset > 0 ? -1 : 1;
                const newIndex = Math.min(
                  Math.max(0, currentIndex + direction),
                  children.length - visibleCards
                );
                setCurrentIndex(newIndex);
              }
            }}
            whileTap={{ cursor: "grabbing" }}
          >
            {children.map((child, index) => (
              <motion.div
                key={index}
                className="card-slider-item"
                style={{
                  width: `${cardWidth}px`,
                  flexShrink: 0,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {child}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pagination dots */}
      {showDots && dotsCount > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: dotsCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`card-slider-dot h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "active w-4 bg-primary"
                  : "w-2 bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}