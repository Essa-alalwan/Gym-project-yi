"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { slideInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { CTAButton } from "@/components/ui/cta-button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrograms?: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenPrograms }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  const handleViewPrograms = () => {
    onClose();
    onOpenPrograms?.();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideInRight}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm glass-card border-l border-glass-border lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <span className="text-xl font-bold text-foreground">
                  {SITE_CONFIG.name}
                </span>
                <button
                  onClick={onClose}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X className="size-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <motion.nav
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex-1 p-6"
              >
                <ul className="space-y-4">
                  {NAV_LINKS.map((link) => (
                    <motion.li key={link.label} variants={staggerItem}>
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li variants={staggerItem}>
                    <Link
                      href="/contact"
                      onClick={handleLinkClick}
                      className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </motion.li>
                </ul>
              </motion.nav>

              {/* Footer CTA */}
              <div className="p-6 border-t border-border/50">
                <CTAButton
                  onClick={handleViewPrograms}
                  className="w-full"
                  size="lg"
                  glow
                >
                  View Programs
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
