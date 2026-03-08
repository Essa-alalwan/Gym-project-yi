"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { PROGRAMS } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { CTAButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";

interface ProgramsProps {
  onSelectProgram?: (programId: string) => void;
}

export function Programs({ onSelectProgram }: ProgramsProps) {
  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-full">
        <SectionHeader
          subtitle="Programs"
          title="Choose Your Path"
          description="Select the program that matches your goals. Each includes personalized coaching, nutrition guidance, and ongoing support."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {PROGRAMS.map((program) => (
            <motion.div key={program.id} variants={staggerItem}>
              <ProgramCard
                program={program}
                onSelect={() => onSelectProgram?.(program.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ProgramCardProps {
  program: (typeof PROGRAMS)[number];
  onSelect: () => void;
}

function ProgramCard({ program, onSelect }: ProgramCardProps) {
  return (
    <GlassCard
      className={cn(
        "relative h-full flex flex-col p-0 overflow-hidden",
        program.popular && "ring-2 ring-primary"
      )}
      hover={false}
    >
      {/* Popular Badge */}
      {program.popular && (
        <div className="absolute top-0 left-0 right-0 bg-primary py-2 text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground">
            <Sparkles className="size-4" />
            Most Popular
          </span>
        </div>
      )}

      <div className={cn("flex flex-col flex-1 p-6", program.popular && "pt-14")}>
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-1">
            {program.name}
          </h3>
          <p className="text-sm text-muted-foreground">{program.subtitle}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-foreground">
              {program.price}
            </span>
            <span className="text-lg text-muted-foreground">
              {program.currency}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {program.duration} program
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6">
          {program.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {program.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="size-3 text-primary" />
              </div>
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <CTAButton
          onClick={onSelect}
          variant={program.popular ? "primary" : "outline"}
          className="w-full"
          glow={program.popular}
        >
          Choose Program
        </CTAButton>
      </div>
    </GlassCard>
  );
}
