"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover } from "@/lib/animations";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  hover?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

export function GlassCard({
  className,
  hover = true,
  glow = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-xl p-6",
        hover && "glass-card-hover cursor-pointer",
        glow && "accent-glow-sm",
        className
      )}
      whileHover={hover ? cardHover : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface GlassCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCardHeader({
  className,
  children,
  ...props
}: GlassCardHeaderProps) {
  return (
    <div
      className={cn("flex flex-col gap-2 mb-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface GlassCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h2" | "h3" | "h4";
}

export function GlassCardTitle({
  className,
  children,
  as: Component = "h3",
  ...props
}: GlassCardTitleProps) {
  return (
    <Component
      className={cn("text-xl font-semibold text-foreground", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

interface GlassCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function GlassCardDescription({
  className,
  children,
  ...props
}: GlassCardDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
}

interface GlassCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCardContent({
  className,
  children,
  ...props
}: GlassCardContentProps) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

interface GlassCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCardFooter({
  className,
  children,
  ...props
}: GlassCardFooterProps) {
  return (
    <div
      className={cn("flex items-center mt-4 pt-4 border-t border-border/50", className)}
      {...props}
    >
      {children}
    </div>
  );
}
