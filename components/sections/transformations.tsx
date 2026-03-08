"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TRANSFORMATIONS } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";

export function Transformations() {
  return (
    <section id="transformations" className="section-padding bg-background">
      <div className="container-full">
        <SectionHeader
          subtitle="Real Results"
          title="Client Transformations"
          description="See the incredible results our clients have achieved through dedication and structured coaching."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TRANSFORMATIONS.map((transformation) => (
            <motion.div key={transformation.id} variants={staggerItem}>
              <TransformationCard transformation={transformation} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface TransformationCardProps {
  transformation: (typeof TRANSFORMATIONS)[number];
}

function TransformationCard({ transformation }: TransformationCardProps) {
  const [showAfter, setShowAfter] = React.useState(false);

  return (
    <GlassCard className="overflow-hidden p-0">
      {/* Image Container */}
      <div 
        className="relative aspect-[4/5] overflow-hidden cursor-pointer group"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
      >
        {/* Before Image */}
        <Image
          src={transformation.beforeImage}
          alt={`${transformation.name} before transformation`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            showAfter ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* After Image */}
        <Image
          src={transformation.afterImage}
          alt={`${transformation.name} after transformation`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            showAfter ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Before/After Labels */}
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <span 
            className={`px-2 py-1 text-xs font-medium rounded-md transition-opacity duration-300 ${
              showAfter ? "opacity-0" : "opacity-100"
            } bg-background/80 backdrop-blur-sm text-foreground`}
          >
            Before
          </span>
          <span 
            className={`px-2 py-1 text-xs font-medium rounded-md transition-opacity duration-300 ${
              showAfter ? "opacity-100" : "opacity-0"
            } bg-primary text-primary-foreground`}
          >
            After
          </span>
        </div>

        {/* Hover Instruction */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <span className="text-xs text-muted-foreground bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">
            Hover to see result
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-foreground">{transformation.name}</h3>
          <span className="text-sm text-primary font-medium">
            {transformation.result}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span>{transformation.duration}</span>
          <ArrowRight className="size-3" />
          <span>Transformation</span>
        </div>
        <p className="text-sm text-muted-foreground italic line-clamp-2">
          &ldquo;{transformation.testimonial}&rdquo;
        </p>
      </div>
    </GlassCard>
  );
}
