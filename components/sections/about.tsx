"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ABOUT_CONTENT } from "@/lib/constants";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";
import { CTAButton } from "@/components/ui/cta-button";

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInLeft}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75" />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden glass-card">
                <Image
                  src="/images/about-trainer.jpg"
                  alt={ABOUT_CONTENT.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Stats Cards */}
              <div className="absolute -bottom-6 -right-6 flex flex-col gap-3">
                {ABOUT_CONTENT.stats.slice(0, 2).map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="glass-card p-3 rounded-xl"
                  >
                    <div className="text-lg font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.span
              variants={staggerItem}
              className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3"
            >
              {ABOUT_CONTENT.headline}
            </motion.span>

            <motion.h2
              variants={staggerItem}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              {ABOUT_CONTENT.name}
            </motion.h2>

            {/* Credentials */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-3 mb-6"
            >
              {ABOUT_CONTENT.credentials.map((credential) => (
                <span
                  key={credential}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-sm text-foreground"
                >
                  <CheckCircle className="size-4 text-primary" />
                  {credential}
                </span>
              ))}
            </motion.div>

            {/* Bio */}
            {ABOUT_CONTENT.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={staggerItem}
                className="text-muted-foreground leading-relaxed mb-4"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* CTA */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-start gap-4 mt-8"
            >
              <Link href="/contact">
                <CTAButton showArrow>
                  Contact Me
                </CTAButton>
              </Link>
              <Link
                href="#programs"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-3"
              >
                View Programs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
