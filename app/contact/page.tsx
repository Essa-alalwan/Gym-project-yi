"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Send, Clock, ArrowRight } from "lucide-react";
import { SITE_CONFIG, FOOTER_LINKS, FINAL_CTA } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { CTAButton } from "@/components/ui/cta-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card border-b border-glass-border">
        <div className="container-full py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="container-full py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Contact {SITE_CONFIG.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your transformation? Have questions about the programs?
              I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-1 space-y-6"
            >
              <motion.div variants={staggerItem}>
                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div variants={staggerItem}>
                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        {SITE_CONFIG.location}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Online coaching available worldwide
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div variants={staggerItem}>
                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                      <p className="text-sm text-muted-foreground">
                        Typically within 24 hours
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-2"
            >
              <GlassCard hover={false} className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="size-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <Link href="/">
                      <CTAButton variant="outline">
                        Back to Home
                      </CTAButton>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          className="bg-secondary/50 border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="bg-secondary/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="program">Interested Program (Optional)</Label>
                      <select
                        id="program"
                        name="program"
                        className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a program</option>
                        <option value="fat-loss">Fat Loss Program</option>
                        <option value="strength-building">Strength Building</option>
                        <option value="body-recomposition">Body Recomposition</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your goals..."
                        rows={5}
                        required
                        className="bg-secondary/50 border-border focus:border-primary resize-none"
                      />
                    </div>

                    <CTAButton
                      type="submit"
                      className="w-full"
                      glow
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </CTAButton>
                  </form>
                )}
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {FINAL_CTA.headline}
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {FINAL_CTA.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#programs">
                <CTAButton size="lg" glow showArrow>
                  {FINAL_CTA.ctaText}
                </CTAButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeInUp}
        className="border-t border-border/50 bg-background-elevated"
      >
        <div className="container-full py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                  {SITE_CONFIG.name}
                </span>
              </Link>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                {SITE_CONFIG.title}. Transform your body with structured, evidence-based fitness coaching.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {FOOTER_LINKS.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-card glass-card-hover text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon === "Instagram" && <Instagram className="size-5" />}
                    {social.icon === "Twitter" && <Twitter className="size-5" />}
                    {social.icon === "Youtube" && <Youtube className="size-5" />}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Programs
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.programs.map((link) => (
                  <li key={link.label}>
                    <Link
                      href="/#programs"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    {SITE_CONFIG.location}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
