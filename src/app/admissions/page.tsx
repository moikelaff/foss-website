import React from "react";

import AdmissionsHero from "@/components/AdmissionsHero";
import ProgramsSection from "@/components/ProgramsSection";
import FAQSection from "@/components/FAQSection";

export default function AdmissionsPage() {
  return (
    // tinggal tambahin navbar here
    <main>
      <AdmissionsHero />
      <ProgramsSection />
      <FAQSection />
      
    </main>
    // tinggal tambahin footer here
  );
}
