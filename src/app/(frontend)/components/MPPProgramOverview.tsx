import React from "react";

export default function MPPProgramOverview() {
  return (
    <section className="max-w-[1480px] mx-auto py-16 px-20 flex flex-col items-start gap-14 bg-sky-950">
      {/* Program Overview */}
      <div className="w-full flex flex-col items-start gap-6">
        <h2 className="text-6xl font-medium font-['Halyard_Display'] text-white leading-[100px]">
          Program Overview
        </h2>
        <p className="text-2xl font-light font-['Halyard_Display'] text-white">
        The Master in Public Policy (MPP) program focusing on Climate Change aims to cultivate the next 
        generation of sustainability leaders. Students enrolled in this program will acquire essential 
        research skills for analyzing information and will develop critical thinking abilities necessary 
        for proposing and evaluating public policies to tackle pressing challenges of climate change. Its 
        graduates will be familiar with the broad interdisciplinary debate on climate change and sustainable 
        development, as well as the fundamental knowledge and skills needed for environmental research or 
        practice at the international level. Furthermore, they will demonstrate proficiency in formulating 
        policies and evidence-informed strategies to address climate change mitigation and adaptation in and 
        for the Global South. Effective communication with relevant stakeholders and the public will be among 
        their key competencies.
        </p>
      </div>
    </section>
  );
}