import React from "react";

import NavBar from "@/components/NavBar";
import ProgramBanner from "@/components/MPPProgramBanner";
import ProgramOverview from "@/components/MPPProgramOverview";
import ProgramSignificance from "@/components/MPPProgramSignificance";
import ProgramWhoIsItFor from "@/components/MPPProgramWhoIsItFor"
import ProgramLearningObjectives from "@/components/MPPProgramLearningObjectives"
import ProgramDegreeRequirements from "@/components/MPPProgramDegreeRequirements";
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
          <ProgramSignificance/>
          <ProgramWhoIsItFor/>
          <ProgramLearningObjectives/>
          <ProgramDegreeRequirements/>
          <ProgramLecturers/>
        </main>
        <footer>
          <Footer />
        </footer></>
    );
  }