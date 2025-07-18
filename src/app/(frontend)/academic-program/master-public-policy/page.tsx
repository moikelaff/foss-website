import React from "react";

import NavBar from "@/(frontend)/components/Navbar";
import ProgramBanner from "@/(frontend)/components/MPPProgramBanner";
import ProgramOverview from "@/(frontend)/components/MPPProgramOverview";
import ProgramSignificance from "@/(frontend)/components/MPPProgramSignificance";
import ProgramWhoIsItFor from "@/(frontend)/components/MPPProgramWhoIsItFor"
import ProgramLearningObjectives from "@/(frontend)/components/MPPProgramLearningObjectives"
import ProgramDegreeRequirements from "@/(frontend)/components/MPPProgramDegreeRequirements";
import ProgramLecturers from "@/(frontend)/components/PhDProgramLecturers";
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