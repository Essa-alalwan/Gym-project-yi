"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FINAL_CTA } from "@/lib/constants";
import { fadeInUp, viewportSettings } from "@/lib/animations";
import { CTAButton } from "@/components/ui/cta-button";

interface FinalCTAProps {
  onOpenPrograms?: () => void;
}

export function FinalCTA({ onOpenPrograms }: FinalCTAProps) {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container-full relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {FINAL_CTA.headline}
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {FINAL_CTA.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <CTAButton
              onClick={onOpenPrograms}
              size="lg"
              glow
              showArrow
            >
              {FINAL_CTA.ctaText}
            </CTAButton>
          </div>

          {/* Secondary Text */}
          <p className="text-sm text-muted-foreground">
            {FINAL_CTA.secondaryText}{" "}
            <Link
              href="/contact"
              className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors"
            >
              Get in touch
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
