"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import { fadeInUp, viewportSettings } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-background-elevated/30">
      <div className="container-full">
        <SectionHeader
          subtitle="FAQ"
          title="Common Questions"
          description="Everything you need to know about working together."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card mb-4 rounded-xl border-0 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
