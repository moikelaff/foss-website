import React from "react";

export default function MPPProgramBanner() {
  return (
    <section className="max-w-[1480px] mx-auto py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-20">
      {/* Left: Text */}
      <div className="flex flex-col items-start gap-14 max-w-[700px]">
        <h1 className="text-5xl md:text-7xl font-medium font-['Halyard_Display'] text-Primary-1 leading-[80px] md:leading-[100px]">
          Master in Public Policy focusing on Climate Change
        </h1>
        <p className="text-2xl font-light font-['Halyard_Display'] text-Neutral-1">
          The MPP program at UIII equips students with the theoretical knowledge and practical skills 
          to understand and address climate-related public policy challenges at both national and 
          international levels. The program focuses on innovative, sustainable, and equitable solutions.
        </p>
      </div>

      {/* Right: Image */}
      <div className="flex-shrink-0 w-full md:w-[500px] h-auto">
        <img
          src="/phd-hero.png"
          alt="Master in Public Policy focusing on Climate Change"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
