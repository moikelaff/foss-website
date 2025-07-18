import React from "react";

import NavBar from "@/(frontend)/components/Navbar";
import AcademicProgramHero from "@/(frontend)/components/AcademicProgramHero"
import AcademicProgramIntro from "@/(frontend)/components/AcademicProgramIntro"
import VisionMissions from "@/(frontend)/components/VisionMissions";
import ProgramsSection from "@/(frontend)/components/ProgramsSection";
import Footer from "@/(frontend)/components/Footer";

export default function AcademicProgramPage() {
    return (
      <>
        <nav>
          <NavBar />
        </nav>
        <main>
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