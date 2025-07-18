import React from "react";

import NavBar from "@/(frontend)/components/Navbar";
import ProgramBanner from "@/(frontend)/components/MAProgramBanner";
import ProgramOverview from "@/(frontend)/components/MAProgramOverview";
import ProgramLearningOutcomes from "@/(frontend)/components/MAProgramLearningOutcomes";
import ProgramCourseStructure from "@/(frontend)/components/MAProgramCourseStructure";
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
          <ProgramCourseStructure/>
          <ProgramLecturers/>
        </main>
        <footer>
          <Footer />
        </footer></>
    );
  }