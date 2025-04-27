'use client';
import React from "react";

export default function AcademicProgramHero() {
  return (
    <section className="w-full h-[700px] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/academic-program-bg.png"
          alt="Academic Program Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-950" />

      {/* Content */}
      <div className="relative z-10 flex justify-center items-start pt-56 h-full">
        <div className="w-[1041px] flex flex-col justify-center items-center gap-6">
          <h1 className="text-center text-white text-9xl font-medium font-['Halyard_Display'] leading-tight">
            Academic Program
          </h1>
          <p className="w-[853px] text-center text-white text-3xl font-light font-['Halyard_Display']">
            UIII’s academic programs are designed to cultivate critical thinking, scholarly excellence, 
            and professional expertise, preparing students to become impactful leaders in their fields globally.
          </p>
        </div>
      </div>
    </section>
  );
}
