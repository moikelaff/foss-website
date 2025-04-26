import React from "react";

import NavBar from "@/components/NavBar";
import PHDPoliticalScience from "@/components/PHDPoliticalScience";
import Footer from "@/components/Footer";

export default function AcademicProgramPage() {
    return (
      <>
        <nav>
          <NavBar />
        </nav>
        <main>
          <PHDPoliticalScience/>
        </main>
        <footer>
          <Footer />
        </footer></>
    );
  }