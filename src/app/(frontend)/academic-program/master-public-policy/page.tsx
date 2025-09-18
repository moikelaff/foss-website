import React from "react";

import NavBar from "@/(frontend)/components/Navbar";
import ProgramBanner from "@/(frontend)/components/academic-program/mpp/MPPProgramBanner";
import ProgramOverview from "@/(frontend)/components/academic-program/mpp/MPPProgramOverview";
import ProgramSignificance from "@/(frontend)/components/academic-program/mpp/MPPProgramSignificance";
import ProgramWhoIsItFor from "@/(frontend)/components/academic-program/mpp/MPPProgramWhoIsItFor"
import ProgramLearningObjectives from "@/(frontend)/components/academic-program/mpp/MPPProgramLearningObjectives"
import ProgramDegreeRequirements from "@/(frontend)/components/academic-program/mpp/MPPProgramDegreeRequirements";
import ProgramLecturers from "@/(frontend)/components/academic-program/phd/PhDProgramLecturers";
import Footer from "@/(frontend)/components/Footer";

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