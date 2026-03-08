"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { StarRating } from "@/components/ui/star-rating";

export function Testimonials() {
  return (
    <section className="section-padding bg-background-elevated/30">
      <div className="container-full">
        <SectionHeader
          subtitle="Testimonials"
          title="What Clients Say"
          description="Hear from real people who have transformed their lives through our coaching programs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.id} variants={staggerItem}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: (typeof TESTIMONIALS)[number];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <GlassCard className="h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-4">
        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Quote className="size-5 text-primary" />
        </div>
      </div>

      {/* Rating */}
      <StarRating rating={testimonial.rating} className="mb-4" />

      {/* Quote */}
      <blockquote className="flex-1 mb-6">
        <p className="text-foreground leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
        <div className="relative size-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </GlassCard>
  );
}
