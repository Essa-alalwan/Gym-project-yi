"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonHover, buttonTap } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

export function CTAButton({
  className,
  variant = "primary",
  size = "md",
  showArrow = false,
  glow = false,
  children,
  ...props
}: CTAButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "text-foreground hover:bg-secondary hover:text-secondary-foreground",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        glow && "accent-glow",
        className
      )}
      whileHover={buttonHover}
      whileTap={buttonTap}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      )}
    </motion.button>
  );
}

interface CTALinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

export function CTALink({
  className,
  variant = "primary",
  size = "md",
  showArrow = false,
  glow = false,
  children,
  href,
  ...props
}: CTALinkProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "text-foreground hover:bg-secondary hover:text-secondary-foreground",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variantClasses[variant],
        sizeClasses[size],
        glow && "accent-glow",
        className
      )}
      whileHover={buttonHover}
      whileTap={buttonTap}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      )}
    </motion.a>
  );
}
