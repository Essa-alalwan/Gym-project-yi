"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  className,
}: StarRatingProps) {
  const sizeClasses = {
    sm: "size-3",
    md: "size-4",
    lg: "size-5",
  };

  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of ${maxRating} stars`}
    >
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            sizeClasses[size],
            index < rating
              ? "text-primary fill-primary"
              : "text-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
}
