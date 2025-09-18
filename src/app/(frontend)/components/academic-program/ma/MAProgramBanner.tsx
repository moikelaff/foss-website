// src/components/MAProgramBanner.tsx
import React from "react";

export default function MAProgramBanner() {
  return (
    <section className="max-w-[1480px] mx-auto py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-20">
      {/* Left: Text */}
      <div className="flex flex-col items-start gap-14 max-w-[700px]">
        <h1 className="text-7xl font-medium font-['Halyard_Display'] text-primary-800 leading-[100px]">
          Master of Arts (MA) in Political Science
        </h1>
        <p className="text-2xl font-light font-['Halyard_Display'] text-neutral-800">
          The Master of Arts program in Political Science at UIII is crafted to foster a deep understanding 
          of the intricate dynamics of politics, both theoretically and in practice.
        </p>
      </div>

      {/* Right: Image */}
      <div className="flex-shrink-0 w-[500px] h-auto">
        <img
          src="/ma-hero.png"
          alt="MA in Political Science"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
