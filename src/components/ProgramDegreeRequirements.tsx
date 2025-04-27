import React from "react";

export default function ProgramDegreeRequirements() {
  return (
    <section className="w-full bg-sky-950 py-16 px-20 flex justify-center">
      <div className="max-w-[1480px] w-full flex flex-row items-center gap-14">
        {/* Left: Title */}
        <h2 className="text-white text-5xl font-medium font-['Halyard_Display'] leading-[100px] whitespace-nowrap">
          Degree Requirements
        </h2>

        {/* Right: Description */}
        <p className="text-white text-2xl font-light font-['Halyard_Display'] max-w-[800px]">
          To earn a Ph.D. in Political Science from UIII, candidates must accumulate a minimum of 36 credit hours beyond their Ph.D. Dissertation. 
          This includes courses on foundational knowledge, dissertation research and writing, and a culminating Ph.D. dissertation.
        </p>
      </div>
    </section>
  );
}
