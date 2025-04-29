// src/components/PHDPoliticalScience.tsx
import React from "react";

export default function PhDProgramLearningOutcomes() {
  return (
    <section className="max-w-[1480px] mx-auto py-16 px-20 flex flex-col items-start gap-14">

      {/* Learning Outcomes */}
      <div className="w-full flex flex-col items-start gap-6">
        <h2 className="text-6xl font-medium font-['Halyard_Display'] text-Primary-1 leading-[100px]">
          Learning Outcomes
        </h2>
        <div className="flex flex-wrap justify-start items-start gap-10">
          {[
            {
              title: "Conceptual Understanding",
              desc: "Compare and contrast the core concepts, approaches, and theories of political science."
            },
            {
              title: "Global Context",
              desc: "Analyze contemporary global issues and their impact on domestic political or socio-economic structures."
            },
            {
              title: "Regional Expertise",
              desc: "Evaluate the evolution and function of political or socio-economic institutions in the Muslim world."
            },
            {
              title: "Problem-Solving",
              desc: "Critically assess potential solutions to pressing political or socio-economic challenges in Muslim societies and beyond."
            },
            {
              title: "Research Proficiency",
              desc: "Develop a theoretically-informed research design addressing significant political or socio-economic problems."
            },
            {
              title: "Independent Research",
              desc: "Demonstrate the capability to initiate, design, and execute independent research projects."
            },
            {
              title: "Effective Communication",
              desc: "Produce scholarly research articles and effectively present results to academic and public audiences."
            }
          ].map((item, idx) => (
            <div key={idx} className="w-72 flex flex-col gap-2">
              <h3 className="text-2xl font-medium font-['Halyard_Display'] text-black">
                {item.title}
              </h3>
              <p className="text-1xl font-light font-['Halyard_Display'] text-black">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
