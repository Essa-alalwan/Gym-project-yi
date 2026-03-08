"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Send, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";
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
    </main>
  );
}
