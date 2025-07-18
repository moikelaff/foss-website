import React from "react";

import NavBar from "@/(frontend)/components/Navbar";
import ProgramBanner from "@/(frontend)/components/PhDProgramBanner";
import ProgramOverview from "@/(frontend)/components/PhDProgramOverview";
import ProgramLearningOutcomes from "@/(frontend)/components/PhDProgramLearningOutcomes";
import ProgramDegreeRequirements from "@/(frontend)/components/PhDProgramDegreeRequirements";
import ProgramFoS from "@/(frontend)/components/PhDProgramFoS";
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