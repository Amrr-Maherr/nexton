"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionWrapperProps {
  children: ReactNode;
  pathname: string;
  animation?: "fade" | "slideUp" | "scale" | "zoom" | "slideRight";
  duration?: number;
}

// Animation variants
const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  zoom: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  },
  slideRight: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
  },
};

const transition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 40,
  mass: 1,
};

export function PageTransitionWrapper({
  children,
  pathname,
  animation = "slideUp",
  duration = 0.5,
}: PageTransitionWrapperProps) {
  const selectedVariants = variants[animation];

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={selectedVariants}
      transition={{ ...transition, duration }}
    >
      {children}
    </motion.div>
  );
}
