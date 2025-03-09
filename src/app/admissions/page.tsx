import React from "react";

import AdmissionsHero from "@/components/AdmissionsHero";
import ProgramsSection from "@/components/ProgramsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function AdmissionsPage() {
  return (
    // tinggal tambahin navbar here
    <>
      // tinggal tambahin navbar here
      <main>
        <AdmissionsHero />
        <ProgramsSection />
        <FAQSection />

      </main>
      <footer>
        <Footer />
      </footer></>
  );
}
