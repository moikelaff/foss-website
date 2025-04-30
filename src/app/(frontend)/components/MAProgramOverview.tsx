import React from "react";

export default function PhDProgramBanner() {
  return (
    <section className="max-w-[1480px] mx-auto py-16 px-20 flex flex-col items-start gap-14 bg-sky-950">
      {/* Program Overview */}
      <div className="w-full flex flex-col items-start gap-6">
        <h2 className="text-6xl font-medium font-['Halyard_Display'] text-white leading-[100px]">
          Program Overview
        </h2>
        <p className="text-2xl font-light font-['Halyard_Display'] text-white">
        Depending on their research interest, students will take several courses that constitute the core 
        subject of their expertise. The MA in Political Science program is designed to equip students with 
        excellent theoretical knowledge and expertise relevant to religious leaders, community organizers, 
        and policymakers to deal with a variety of social problems about the relationship between religion 
        and politics. For those wishing to pursue further education, the MA program will provide excellent 
        substantive and theoretical knowledge of key issues in the study of Islam, religion, and politics, 
        and a strong methodological foundation to conduct further research in these areas. With a unique 
        blend of theoretical depth and empirical richness, students are also given the required and relevant 
        theoretical and methodological tools to dissect political phenomena, understand the undercurrents of 
        international relations, and propose innovative solutions to pressing societal challenges.
        </p>
      </div>
    </section>
  );
}