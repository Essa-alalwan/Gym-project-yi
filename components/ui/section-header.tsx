"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, viewportSettings } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  animated?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  animated = true,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const content = (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        alignmentClasses[align],
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3",
            subtitleClassName
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg text-muted-foreground text-pretty max-w-2xl",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );

  if (!animated) {
    return content;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
    >
      {content}
    </motion.div>
  );
}
