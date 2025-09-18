import React from "react";

export default function MPPProgramOverview() {
  return (
    <section className="max-w-[1480px] mx-auto py-16 px-4 md:px-20 flex flex-col items-start gap-14 bg-sky-950">
      {/* Program Overview */}
      <div className="w-full flex flex-col items-start gap-6">
        <h2 className="text-5xl md:text-6xl font-medium font-['Halyard_Display'] text-white leading-[70px] md:leading-[100px]">
          Program Overview
        </h2>
        <p className="text-base md:text-2xl font-light font-['Halyard_Display'] text-white max-w-5xl leading-relaxed">
          The Master in Public Policy (MPP) program focusing on Climate Change aims to cultivate the next
          generation of sustainability leaders. Students will acquire essential research skills for analyzing
          information and develop the critical thinking necessary for evaluating and proposing public policies
          to address pressing climate challenges.
          <br /><br />
          Graduates of the program will be familiar with the broad interdisciplinary debates on climate change
          and sustainable development, equipped with the core knowledge and practical skills required for
          environmental research or professional practice at the international level.
          <br /><br />
          They will demonstrate proficiency in formulating evidence-informed strategies for climate change
          mitigation and adaptation—especially in the context of the Global South—alongside strong communication
          skills to engage effectively with stakeholders and the public.
        </p>
      </div>
    </section>
  );
}
