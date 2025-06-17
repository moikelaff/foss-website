import React from "react";

import NavBar from "@/components/NavBar";
import ProgramBanner from "@/components/MAProgramBanner";
import ProgramOverview from "@/components/MAProgramOverview";
import ProgramLearningOutcomes from "@/components/MAProgramLearningOutcomes";
import ProgramCourseStructure from "@/components/MAProgramCourseStructure";
import ProgramLecturers from "@/components/PhDProgramLecturers";
import Footer from "@/components/Footer";

export default function AcademicProgramPage() {
    return (
      <>
        <nav>
          <NavBar />
        </nav>
        <main className="font-halyard">
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