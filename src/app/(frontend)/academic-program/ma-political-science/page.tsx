import React from "react";

import NavBar from "@/(frontend)/components/Navbar";
import ProgramBanner from "@/(frontend)/components/academic-program/ma/MAProgramBanner";
import ProgramOverview from "@/(frontend)/components/academic-program/ma/MAProgramOverview";
import ProgramLearningOutcomes from "@/(frontend)/components/academic-program/ma/MAProgramLearningOutcomes";
import ProgramCourseStructure from "@/(frontend)/components/academic-program/ma/MAProgramCourseStructure";
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
          <ProgramCourseStructure/>
          <ProgramLecturers/>
        </main>
        <footer>
          <Footer />
        </footer></>
    );
  }