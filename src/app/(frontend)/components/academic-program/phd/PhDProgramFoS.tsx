"use client";

import React, { useState } from "react";

export default function PhDProgramFoS() {
  const [hoveredCard, setHoveredCard] = useState<null | string>(null);

  return (
    <section className="w-full max-w-[1480px] mx-auto py-16 px-4 flex flex-col gap-14">
      {/* Title */}
      <h2 className="text-Primary-1 text-4xl md:text-5xl font-medium font-['Halyard_Display'] leading-tight md:leading-[100px] text-center">
        Field of Study
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap gap-10 justify-center">
        {/* === Card Component (Reusable) === */}
        {[
          {
            id: "comparative",
            title: "Comparative Politics",
            image: "/FoS-ComparativePolitics.png",
            items: [
              "Social Movement",
              "Political Institutions",
              "Democracy and Democratization",
              "Political Islam",
              "Political Economy and Development",
              "Gender and Politics",
              "Voting Behavior",
            ],
          },
          {
            id: "international",
            title: "International Relations",
            image: "/FoS-InternationalRelations.png",
            items: [
              "Theory and History",
              "Security Studies and Foreign Policy",
              "International Institutions and Global Governance",
              "International Political Economy",
              "Peace Studies",
              "Comparative Foreign Policy",
              "Global Competition and Technology",
            ],
          },
        ].map(({ id, title, image, items }) => (
          <div
            key={id}
            className="relative w-full max-w-[600px] h-[400px] rounded-[40px] overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredCard(id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Image */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-950 opacity-80" />

            {/* Title */}
            <div className="absolute top-0 left-0 w-full text-white text-3xl md:text-4xl font-medium font-['Halyard_Display'] p-6">
              {title}
            </div>

            {/* Hover Content */}
            {hoveredCard === id && (
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-sky-950 bg-opacity-90 text-white text-lg md:text-2xl font-light p-6 gap-2 overflow-y-auto">
                <ul className="list-disc text-left pl-6 space-y-1">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
