"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";
import { fadeInUp, viewportSettings } from "@/lib/animations";

interface FooterProps {
  onOpenPrograms?: () => void;
}

export function Footer({ onOpenPrograms }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialIcons: Record<string, React.ReactNode> = {
    Instagram: <Instagram className="size-5" />,
    Twitter: <Twitter className="size-5" />,
    Youtube: <Youtube className="size-5" />,
  };

  return (
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
            <Link href="#hero" className="inline-block mb-4">
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
                  {socialIcons[social.icon]}
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
                    href={link.href}
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
                  <button
                    onClick={onOpenPrograms}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {link.label}
                  </button>
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
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary hover:text-primary-hover transition-colors"
                >
                  Send a message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} {SITE_CONFIG.name}. All rights reserved.
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
  );
}
