"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Sparkles, X } from "lucide-react";
import { PROGRAMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CTAButton } from "@/components/ui/cta-button";

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgramId?: string;
}

export function ProgramModal({
  isOpen,
  onClose,
  selectedProgramId,
}: ProgramModalProps) {
  const [activeProgram, setActiveProgram] = React.useState<string | null>(
    selectedProgramId || null
  );

  React.useEffect(() => {
    if (selectedProgramId) {
      setActiveProgram(selectedProgramId);
    }
  }, [selectedProgramId]);

  const selectedProgram = activeProgram
    ? PROGRAMS.find((p) => p.id === activeProgram)
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="sm:max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-glass-border"
        showCloseButton={false}
      >
        <DialogHeader className="relative">
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 p-2 rounded-full glass-card text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Choose Your Program
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Select the program that best fits your fitness goals and lifestyle.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {/* Program Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {PROGRAMS.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(program.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeProgram === program.id
                    ? "bg-primary text-primary-foreground"
                    : "glass-card text-muted-foreground hover:text-foreground"
                )}
              >
                {program.name}
                {program.popular && (
                  <Sparkles className="inline-block ml-1.5 size-3" />
                )}
              </button>
            ))}
          </div>

          {/* Program Details */}
          {selectedProgram ? (
            <div className="glass-card rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Left Side - Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {selectedProgram.name}
                    </h3>
                    {selectedProgram.popular && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Sparkles className="size-3" />
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {selectedProgram.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {selectedProgram.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      What&apos;s Included
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProgram.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <Check className="size-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side - Pricing & CTA */}
                <div className="md:w-64 glass-card rounded-xl p-6 text-center">
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-foreground">
                        {selectedProgram.price}
                      </span>
                      <span className="text-lg text-muted-foreground">
                        {selectedProgram.currency}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedProgram.duration} program
                    </p>
                  </div>

                  <Link href="/contact" onClick={onClose}>
                    <CTAButton className="w-full mb-3" glow>
                      Get Started
                    </CTAButton>
                  </Link>

                  <p className="text-xs text-muted-foreground">
                    Start your transformation today
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 glass-card rounded-xl">
              <p className="text-muted-foreground">
                Select a program above to see details
              </p>
            </div>
          )}

          {/* All Programs Quick View */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Comparison
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROGRAMS.map((program) => (
                <button
                  key={program.id}
                  onClick={() => setActiveProgram(program.id)}
                  className={cn(
                    "p-4 rounded-xl text-left transition-all",
                    activeProgram === program.id
                      ? "bg-primary/10 ring-1 ring-primary"
                      : "glass-card hover:bg-secondary/50"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">
                      {program.name}
                    </span>
                    {program.popular && (
                      <Sparkles className="size-4 text-primary" />
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-primary">
                      {program.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {program.currency}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {program.duration}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
