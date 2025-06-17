import React from "react";

import NavBar from "@/components/NavBar";
import AcademicProgramHero from "@/components/AcademicProgramHero"
import AcademicProgramIntro from "@/components/AcademicProgramIntro"
import VisionMissions from "@/components/VisionMissions";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";

export default function AcademicProgramPage() {
    return (
      <>
        <nav>
          <NavBar />
        </nav>
        <main className="font-halyard">
          <AcademicProgramHero/>
          <AcademicProgramIntro/>
          <VisionMissions/> 
          <ProgramsSection/>
        </main>
        <footer>
          <Footer />
        </footer></>
    );
  }