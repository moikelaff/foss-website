import React from "react";

export default function MPPProgramWhoIsItFor() {
  return (
    <section className="w-full bg-sky-950 py-16 px-20 flex justify-center">
      <div className="max-w-[1480px] w-full flex flex-row items-center gap-14">
        {/* Left: Title */}
        <h2 className="text-white text-5xl font-medium font-['Halyard_Display'] leading-[100px] whitespace-nowrap">
        Who Is It For?
        </h2>

        {/* Right: Description */}
        <p className="text-white text-2xl font-light font-['Halyard_Display'] max-w-[800px]">
        The MPP program focusing on Climate Change is suitable for students from a wide range of social 
        science backgrounds who have a broad interest in a comprehensive approach to climate change and 
        sustainable development issues.
        The program is designed to prepare talents that can be well-positioned as leaders in firms engaged 
        in environmental consulting, think tanks, government officers, NGO representatives, international 
        civil servants or private sector specialists, and diplomats.
        </p>
      </div>
    </section>
  );
}
