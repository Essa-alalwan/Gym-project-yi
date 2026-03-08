"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HERO_CONTENT, TRUST_METRICS } from "@/lib/constants";
import {
  heroTextVariants,
  staggerContainer,
  staggerItem,
  fadeInRight,
  imageReveal,
} from "@/lib/animations";
import { CTAButton } from "@/components/ui/cta-button";

interface HeroProps {
  onOpenPrograms?: () => void;
}

export function Hero({ onOpenPrograms }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={staggerItem} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                Now Accepting New Clients
              </span>
            </motion.div>

            {/* Headlines */}
            <motion.h1
              variants={heroTextVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              {HERO_CONTENT.headline}
              <br />
              <span className="text-gradient">{HERO_CONTENT.subheadline}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <CTAButton
                onClick={onOpenPrograms}
                size="lg"
                glow
                showArrow
              >
                {HERO_CONTENT.ctaText}
              </CTAButton>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {HERO_CONTENT.secondaryCtaText}
              </Link>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              variants={staggerContainer}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {TRUST_METRICS.map((metric) => (
                <motion.div
                  key={metric.label}
                  variants={staggerItem}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* Image Container */}
              <motion.div
                variants={imageReveal}
                className="relative rounded-2xl overflow-hidden glass-card"
              >
                <Image
                  src="/images/hero-trainer.jpg"
                  alt="Isa Ebrahim - Online Fitness Coach"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">7+</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Years</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
