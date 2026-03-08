"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonHover, buttonTap } from "@/lib/animations";

interface BackToTopProps {
  className?: string;
  threshold?: number;
}

export function BackToTop({ className, threshold = 300 }: BackToTopProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          whileHover={buttonHover}
          whileTap={buttonTap}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-6 right-6 z-50 p-3 rounded-full glass-card glass-card-hover",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            className
          )}
          aria-label="Back to top"
        >
          <ArrowUp className="size-5 text-primary" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
