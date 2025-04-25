import React from "react";

import NavBar from "@/components/NavBar";
import AdmissionsHero from "@/components/AdmissionsHero";
import ProgramsSection from "@/components/ProgramsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function AdmissionsPage() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
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
