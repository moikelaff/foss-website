import React from "react";

export default function MPPProgramDegreeRequirements() {
  return (
    <section className="w-full bg-sky-950 py-16 px-4 md:px-20 flex justify-center">
      <div className="max-w-[1480px] w-full flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-14">
        
        {/* Left: Title */}
        <h2 className="text-white text-4xl md:text-5xl font-medium font-['Halyard_Display'] leading-[60px] md:leading-[100px] whitespace-nowrap">
          Degree Requirements
        </h2>

        {/* Right: Description */}
        <p className="text-white text-xl md:text-2xl font-light font-['Halyard_Display'] max-w-[800px]">
          Students will obtain the MPP degree focusing on Climate Change upon successful completion of 42 
          credits, including 36 credits for coursework and 6 credits for a final independent research project 
          (capstone). All the requirements must be completed within two years (four semesters).
        </p>
      </div>
    </section>
  );
}
