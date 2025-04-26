// src/components/PHDPoliticalScience.tsx
import React from "react";

export default function PHDPoliticalScience() {
  return (
    <section className="max-w-[1480px] mx-auto py-16 px-4 flex flex-col items-start gap-14">
      {/* Title */}
      <h1 className="text-9xl font-medium font-['Halyard_Display'] text-Primary-1 leading-[100px]">
        PhD in Political Science
      </h1>

      {/* Intro Description */}
      <p className="text-2xl font-light font-['Halyard_Display'] text-Neutral-1">
        The Ph.D. program in Political Science at UIII stands as a beacon of academic excellence and rigorous scholarship.
        Tailored to address the intricate political landscapes of Muslim societies and states, this program seeks to nurture
        scholars who will be proficient in original, independent research about political dynamics.
      </p>

      {/* Hero Image */}
      <img
        src="/phd-hero.png"
        alt="PhD in Political Science"
        className="w-[1035px] h-[1018px] object-cover"
      />

      {/* Program Overview */}
      <div className="w-full flex flex-col items-start gap-6">
        <h2 className="text-8xl font-medium font-['Halyard_Display'] text-Primary-1 leading-[100px]">
          Program Overview
        </h2>
        <p className="text-3xl font-light font-['Halyard_Display'] text-Neutral-1">
          Depending on their research interest, students will take several courses that constitute the core subject of their expertise.
          The Ph.D. program is designed to equip students with excellent theoretical knowledge and methodological rigor to address
          complex socio-political challenges. With a unique blend of theoretical depth and empirical richness, students gain the tools
          to dissect political phenomena, understand the undercurrents of international relations, and propose innovative solutions
          to pressing societal issues.
        </p>
      </div>

      {/* Learning Outcomes */}
      <div className="w-full flex flex-col items-start gap-6">
        <h2 className="text-8xl font-medium font-['Halyard_Display'] text-Primary-1 leading-[100px]">
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
              <h3 className="text-3xl font-medium font-['Halyard_Display'] text-black">
                {item.title}
              </h3>
              <p className="text-2xl font-light font-['Halyard_Display'] text-black">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider / Footer Section */}
      <div className="w-full h-96 bg-Primary-1" />
    </section>
  );
}
