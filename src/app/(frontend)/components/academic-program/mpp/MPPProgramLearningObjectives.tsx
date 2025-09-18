import React from "react";

export default function MPPProgramLearningObjectives() {
  return (
    <section className="max-w-[1480px] mx-auto py-16 px-4 md:px-20 flex flex-col items-start gap-14">
      {/* Learning Objectives */}
      <div className="w-full flex flex-col items-start gap-6">
        <h2 className="text-5xl md:text-6xl font-medium font-['Halyard_Display'] text-Primary-1 leading-[70px] md:leading-[100px]">
          Learning Objectives
        </h2>
        <div className="flex flex-wrap justify-start items-start gap-10">
          {[
            {
              title: "Extensive Analytical Skills",
              desc: "Students will acquire analytical skills such as statistical analysis, policy formulation, implementation analysis, and cost-benefit analysis to create innovative solutions to climate change challenges, grounded in science and relevant to the Global South."
            },
            {
              title: "Critical and Interdisciplinary Thinking",
              desc: "Students will gain a critical mindset for exploring sustainability policy dimensions in interdisciplinary ways and communicating insights effectively to both specialist and non-specialist audiences."
            },
            {
              title: "Policy Recommendation Expertise",
              desc: "Students will develop the ability to propose original, scientifically grounded policy recommendations on climate change, considering socio-economic, environmental, governance, and geopolitical contexts relevant to the Global South."
            },
          ].map((item, idx) => (
            <div key={idx} className="w-full md:w-72 flex flex-col gap-2">
              <h3 className="text-2xl font-medium font-['Halyard_Display'] text-black">
                {item.title}
              </h3>
              <p className="text-base md:text-lg font-light font-['Halyard_Display'] text-black">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
