"use client";

import React from "react";

export default function PhDProgramLearningOutcomes() {
  const outcomes = [
    {
      title: "Conceptual Understanding",
      desc: "Compare and contrast the core concepts, approaches, and theories of political science.",
    },
    {
      title: "Global Context",
      desc: "Analyze contemporary global issues and their impact on domestic political or socio-economic structures.",
    },
    {
      title: "Regional Expertise",
      desc: "Evaluate the evolution and function of political or socio-economic institutions in the Muslim world.",
    },
    {
      title: "Problem-Solving",
      desc: "Critically assess potential solutions to pressing political or socio-economic challenges in Muslim societies and beyond.",
    },
    {
      title: "Research Proficiency",
      desc: "Develop a theoretically-informed research design addressing significant political or socio-economic problems.",
    },
    {
      title: "Independent Research",
      desc: "Demonstrate the capability to initiate, design, and execute independent research projects.",
    },
    {
      title: "Effective Communication",
      desc: "Produce scholarly research articles and effectively present results to academic and public audiences.",
    },
  ];

  return (
    <section className="max-w-[1480px] mx-auto py-16 px-6 md:px-20 flex flex-col gap-14">
      {/* Title */}
      <h2 className="text-Primary-1 text-4xl md:text-6xl font-medium font-['Halyard_Display'] leading-tight md:leading-[100px]">
        Learning Outcomes
      </h2>

      {/* Outcomes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {outcomes.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <h3 className="text-xl md:text-2xl font-medium font-['Halyard_Display'] text-black">
              {item.title}
            </h3>
            <p className="text-base md:text-lg font-light font-['Halyard_Display'] text-black">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
