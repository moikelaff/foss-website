// src/components/PHDPoliticalScience.tsx
import React from "react";

export default function ProgramBanner() {
  return (
    <section className="max-w-[1480px] mx-auto py-16 px-4 flex flex-col items-start gap-14">
      {/* Program Overview */}
      <div className="w-full flex flex-col items-start gap-6">
        <h2 className="text-7xl font-medium font-['Halyard_Display'] text-Primary-1 leading-[100px]">
          Program Overview
        </h2>
        <p className="text-2xl font-light font-['Halyard_Display'] text-Neutral-1">
          Depending on their research interest, students will take several courses that constitute the core subject of their expertise.
          The Ph.D. program is designed to equip students with excellent theoretical knowledge and methodological rigor to address
          complex socio-political challenges. With a unique blend of theoretical depth and empirical richness, students gain the tools
          to dissect political phenomena, understand the undercurrents of international relations, and propose innovative solutions
          to pressing societal issues.
        </p>
      </div>
    </section>
  );
}
