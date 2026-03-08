"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { navbarVariants } from "@/lib/animations";
import { CTAButton } from "@/components/ui/cta-button";
import { MobileMenu } from "./mobile-menu";

interface NavbarProps {
  onOpenPrograms?: () => void;
}

export function Navbar({ onOpenPrograms }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-card border-b border-glass-border py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="container-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-2 group"
            aria-label="Go to home"
          >
            <span className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <CTAButton
              size="sm"
              onClick={onOpenPrograms}
              glow
            >
              View Programs
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenPrograms={onOpenPrograms}
      />
    </>
  );
}
