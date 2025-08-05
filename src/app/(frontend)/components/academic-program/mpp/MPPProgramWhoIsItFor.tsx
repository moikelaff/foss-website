import React from "react";

export default function MPPProgramWhoIsItFor() {
  return (
    <section className="w-full bg-sky-950 py-16 px-4 md:px-20 flex justify-center">
      <div className="max-w-[1480px] w-full flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-14">
        
        {/* Left: Title */}
        <h2 className="text-white text-4xl md:text-5xl font-medium font-['Halyard_Display'] leading-tight md:leading-[100px]">
          Who Is It For?
        </h2>

        {/* Right: Description */}
        <p className="text-white text-base md:text-2xl font-light font-['Halyard_Display'] max-w-[800px] leading-relaxed">
          The MPP program focusing on Climate Change is suitable for students from a wide range of social 
          science backgrounds who have a broad interest in a comprehensive approach to climate change and 
          sustainable development issues.
          <br /><br />
          The program is designed to prepare talents that can be well-positioned as leaders in firms engaged 
          in environmental consulting, think tanks, government offices, NGOs, international civil service, 
          private sector sustainability roles, and diplomatic missions.
        </p>
      </div>
    </section>
  );
}
