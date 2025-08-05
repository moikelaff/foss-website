import React from "react";

import NavBar from "@/(frontend)/components/Navbar";
import ProgramBanner from "@/(frontend)/components/academic-program/phd/PhDProgramBanner";
import ProgramOverview from "@/(frontend)/components/academic-program/phd/PhDProgramOverview";
import ProgramLearningOutcomes from "@/(frontend)/components/academic-program/phd/PhDProgramLearningOutcomes";
import ProgramDegreeRequirements from "@/(frontend)/components/academic-program/phd/PhDProgramDegreeRequirements";
import ProgramFoS from "@/(frontend)/components/academic-program/phd/PhDProgramFoS";
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