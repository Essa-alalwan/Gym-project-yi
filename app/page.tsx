"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Transformations } from "@/components/sections/transformations";
import { Testimonials } from "@/components/sections/testimonials";
import { Programs } from "@/components/sections/programs";
import { WhyTrain } from "@/components/sections/why-train";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { BackToTop } from "@/components/ui/back-to-top";
import { ProgramModal } from "@/components/ui/program-modal";

export default function HomePage() {
  const [isProgramModalOpen, setIsProgramModalOpen] = React.useState(false);
  const [selectedProgramId, setSelectedProgramId] = React.useState<string | undefined>();

  const openProgramModal = (programId?: string) => {
    setSelectedProgramId(programId);
    setIsProgramModalOpen(true);
  };

  const closeProgramModal = () => {
    setIsProgramModalOpen(false);
    setSelectedProgramId(undefined);
  };

  return (
    <>
      <Navbar onOpenPrograms={() => openProgramModal()} />
      
      <main>
        <Hero onOpenPrograms={() => openProgramModal()} />
        <SocialProof onOpenPrograms={() => openProgramModal()} />
        <Transformations />
        <Testimonials />
        <Programs onSelectProgram={openProgramModal} />
        <WhyTrain />
        <About />
        <FAQ />
        <FinalCTA onOpenPrograms={() => openProgramModal()} />
      </main>

      <Footer onOpenPrograms={() => openProgramModal()} />
      
      <BackToTop />

      <ProgramModal
        isOpen={isProgramModalOpen}
        onClose={closeProgramModal}
        selectedProgramId={selectedProgramId}
      />
    </>
  );
}
