"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Target,
  FlaskConical,
  MessageCircle,
  TrendingUp,
  Calendar,
  Award,
  type LucideIcon,
} from "lucide-react";
import { BENEFITS } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";

const iconMap: Record<string, LucideIcon> = {
  Target,
  FlaskConical,
  MessageCircle,
  TrendingUp,
  Calendar,
  Award,
};

export function WhyTrain() {
  return (
    <section className="section-padding bg-background-elevated/30">
      <div className="container-full">
        <SectionHeader
          subtitle="Why Train With Me"
          title="The Difference"
          description="What sets my coaching apart and why clients see real, lasting results."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BENEFITS.map((benefit) => {
            const IconComponent = iconMap[benefit.icon] || Target;
            
            return (
              <motion.div key={benefit.id} variants={staggerItem}>
                <BenefitCard benefit={benefit} Icon={IconComponent} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  benefit: (typeof BENEFITS)[number];
  Icon: LucideIcon;
}

function BenefitCard({ benefit, Icon }: BenefitCardProps) {
  return (
    <GlassCard className="h-full">
      {/* Icon */}
      <div className="mb-4">
        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="size-6 text-primary" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {benefit.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {benefit.description}
      </p>
    </GlassCard>
  );
}
