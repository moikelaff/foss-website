import React from "react";

export default function AcademicProgramHero() {
  return (
    <section className="w-full flex justify-center bg-sky-950 py-16">
        
  <div className="w-[1440px] flex justify-between items-start px-8">
    {/* Text Section */}
    <div className="w-[800px] inline-flex flex-col justify-start items-start gap-14">
      {/* Hero Title */}
      <h1 className="text-white text-5xl font-medium font-['Inter']">
        At UIII, the study of Political Science is an engaging and in-depth
        experience, allowing students to explore political phenomena in all
        their complexity.
      </h1>

      {/* Hero Description */}
      <p className="text-white text-3xl font-light font-['Halyard_Display']">
        The institution offers a comprehensive suite of graduate programs in
        Political Science, each tailored to meet different academic and career
        aspirations. These include a Master’s program and two distinct Ph.D.
        tracks, allowing students to embark on a journey that resonates with
        their unique academic inclinations.
        <br />
        <br />
        Students enrolling in the graduate programs at UIII are not merely
        engaging with political theories but are invited on a transformative
        journey that evaluates the contemporary political landscape,
        understanding its nuances, challenges, and implications. The Master’s
        program is designed to provide an immersive experience, blending
        foundational principles with applied studies, prepping scholars for
        both further academic endeavors and leadership roles in various
        sectors. The Ph.D. tracks, on the other hand, are crafted for those
        with an inclination towards research and academic contributions,
        providing them with a robust platform to explore, critique, and
        contribute to the ever-evolving field of political science.
      </p>
    </div>

    {/* Image Section */}
    <img
      className="w-96 h-[719px] object-cover"
      src="/academic-program-intro.png"
      alt="Political Science at UIII"
    />
  </div>
</section>
  );
}
