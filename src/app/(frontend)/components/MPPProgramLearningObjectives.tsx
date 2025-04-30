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
              title: "CStudents will acquire an extensive set of analytical skills",
              desc: "including statistical analysis, policy formulation and implementation analysis, and cost-benefit analysis that can be applied to develop innovative solutions to address climate change issues and policy problems as informed by the science of climate change and the context of Global South."
            },
            {
              title: "Students will gain a critical attitude",
              desc: "in the exploration of the sustainability dimensions of policies in interdisciplinary ways and communicate with both specialist and non-specialist audiences."
            },
            {
              title: "Students will develop expertise to develop original policy recommendations on climate change",
              desc: "with appropriate scientific methodologies in terms of analysis in the realms of social-economic, environmental, international, intercultural governance, and geopolitics relevant for the Global South."
            },
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
