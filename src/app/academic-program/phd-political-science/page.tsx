import React from "react";

import NavBar from "@/components/NavBar";
import ProgramBanner from "@/components/ProgramBanner";
import ProgramOverview from "@/components/ProgramOverview";
import ProgramLearningOutcomes from "@/components/ProgramLearningOutcomes";
import ProgramDegreeRequirements from "@/components/ProgramDegreeRequirements";
import ProgramFoS from "@/components/ProgramFoS";
import ProgramLecturers from "@/components/ProgramLecturers";
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