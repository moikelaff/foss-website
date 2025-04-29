import React from "react";

import NavBar from "@/components/NavBar";
import ProgramBanner from "@/components/PhDProgramBanner";
import ProgramOverview from "@/components/PhDProgramOverview";
import ProgramLearningOutcomes from "@/components/PhDProgramLearningOutcomes";
import ProgramDegreeRequirements from "@/components/PhDProgramDegreeRequirements";
import ProgramFoS from "@/components/PhDProgramFoS";
import ProgramLecturers from "@/components/PhDProgramLecturers";
import Footer from "@/components/Footer";

export default function AcademicProgramPage() {
    return (
      <>
        <nav>
          <NavBar />
        </nav>
        <main>
          <ProgramBanner/>
          <ProgramOverview/>
          <ProgramLearningOutcomes/>
          <ProgramDegreeRequirements/>
          <ProgramFoS/>
          <ProgramLecturers/>
        </main>
        <footer>
          <Footer />
        </footer></>
    );
  }