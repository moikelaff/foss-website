// src/components/AcademicProgramBanner.tsx
import React from "react";

export default function AcademicProgramHero() {
  return (
    <section className="w-full h-[1018px] relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/academic-program-bg.png"
          alt="Academic Program Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-950" />

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="w-[1041px] h-52 inline-flex flex-col justify-start items-center gap-5">
          <h1 className="self-stretch h-32 text-center text-white text-9xl font-medium font-['Halyard_Display'] leading-9">
            Academic Program
          </h1>
          <p className="w-[853px] text-center text-white text-3xl font-light font-['Halyard_Display']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
    </section>
  );
}
