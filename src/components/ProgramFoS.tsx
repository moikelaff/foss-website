"use client";

import React, { useState } from "react";

export default function ProgramFoS() {
  const [hoveredCard, setHoveredCard] = useState<null | string>(null);

  return (
    <section className="w-full max-w-[1480px] mx-auto py-16 px-4 flex flex-col gap-14">
      {/* Title */}
      <h2 className="text-Primary-1 text-6xl font-medium font-['Halyard_Display'] leading-[100px] text-center">
        Field of Study
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap gap-10 justify-center">
        {/* Comparative Politics Card */}
        <div
          className="relative w-[600px] h-[400px] rounded-[40px] overflow-hidden group cursor-pointer"
          onMouseEnter={() => setHoveredCard("comparative")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Background Image */}
          <img
            src="/FoS-ComparativePolitics.png"
            alt="Comparative Politics"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-950 opacity-80" />

          {/* Title */}
          <div className="absolute top-0 left-0 w-full text-white text-4xl font-medium font-['Halyard_Display'] p-6">
            Comparative Politics
          </div>

          {/* Hover Content */}
          {hoveredCard === "comparative" && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-sky-950 bg-opacity-90 text-white text-2xl font-light p-6 gap-2 overflow-y-auto">
              <ul className="list-disc text-left pl-6">
                <li>Social Movement</li>
                <li>Political Institutions</li>
                <li>Democracy and Democratization</li>
                <li>Political Islam</li>
                <li>Political Economy and Development</li>
                <li>Gender and Politics</li>
                <li>Voting Behavior</li>
              </ul>
            </div>
          )}
        </div>

        {/* International Relations Card */}
        <div
          className="relative w-[600px] h-[400px] rounded-[40px] overflow-hidden group cursor-pointer"
          onMouseEnter={() => setHoveredCard("international")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Background Image */}
          <img
            src="/FoS-InternationalRelations.png"
            alt="International Relations"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-950 opacity-80" />

          {/* Title */}
          <div className="absolute top-0 left-0 w-full text-white text-4xl font-medium font-['Halyard_Display'] p-6">
            International Relations
          </div>

          {/* Hover Content */}
          {hoveredCard === "international" && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-sky-950 bg-opacity-90 text-white text-2xl font-light p-6 gap-2 overflow-y-auto">
              <ul className="list-disc text-left pl-6">
                <li>Theory and History</li>
                <li>Security Studies and Foreign Policy</li>
                <li>International Institutions and Global Governance</li>
                <li>International Political Economy</li>
                <li>Peace Studies</li>
                <li>Comparative Foreign Policy</li>
                <li>Global Competition and Technology</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
