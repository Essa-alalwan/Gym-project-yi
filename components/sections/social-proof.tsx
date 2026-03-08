"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TRUST_METRICS } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";

interface SocialProofProps {
  onOpenPrograms?: () => void;
}

export function SocialProof({ onOpenPrograms }: SocialProofProps) {
  return (
    <section className="relative py-16 border-y border-border/30 bg-background-elevated/50">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 flex-1">
            {TRUST_METRICS.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={staggerItem}>
            <button
              onClick={onOpenPrograms}
              className="group inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-medium"
            >
              Start Your Transformation
              <svg
                className="size-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
