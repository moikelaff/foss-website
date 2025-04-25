import React from "react";

const mission = [
  {
    title: "Teaching Excellence",
    description:
      "To proffer rigorous pedagogy in political science coupled with methodical research training.",
    icon: "/mission-teaching-excellence.svg",
  },
  {
    title: "Specialized Research",
    description:
      "To conduct seminal research centered on the evolution and intricacies of Muslim societies and countries predominantly populated by Muslims, harmoniously blending theoretical expertise with profound comprehension.",
    icon: "/mission-specialized-research.svg",
  },
  {
    title: "Addressing Global Paradigms",
    description:
      "To spearhead pioneering research endeavors that grapple with global strategic concerns, particularly those wielding a profound influence on Muslim societies and nations with substantial Muslim demography.",
    icon: "/mission-addressing-global-paradigms.svg",
  },
  {
    title: "Knowledge Dissemination",
    description:
      "To amplify and disseminate research findings that can act as touchstones for the wider populace, academic fraternities, and both national and global policy orchestrators, especially in the context of socio-political tribulations experienced by Muslim societies and Muslim-majority nations.",
    icon: "/mission-knowledge-dissemination.svg",
  },
  {
    title: "Community Engagement",
    description:
      "To foster community enrichment and engagement initiatives underpinned by rigorous scientific research about socio-political challenges and global strategic issues.",
    icon: "/mission-community-engagement.svg",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1480px] mx-auto flex flex-col items-start gap-20 px-4">

        {/* VISION HEADER */}
        <div className="w-full text-left">
          <h2 className="text-6xl font-medium font-['Halyard_Display'] text-sky-950">
            Vision
          </h2>
        </div>
        
        {/* VISION */}
        <div className="w-[982px] flex flex-col gap-6">
          <p className="text-3xl font-light font-['Halyard_Display'] text-Neutral-1">
            The Graduate Program in Political Science (PS MIP) at UIII projects its scholarly
            vision with an emphasis on imparting and proliferating knowledge about the evolving
            socio-political dynamics of Indonesia, as well as of Muslim societies and countries
            predominantly inhabited by Muslims. Its envisioned trajectory is{" "}
            <span className="font-medium">
              “To ascend as an innovative and preeminent global epicenter for teaching and
              researching modern political science.”
            </span>
          </p>
        </div>

        {/* MISSION HEADER */}
        <div className="w-full text-right">
          <h2 className="text-6xl font-medium font-['Halyard_Display'] text-sky-950">
            Mission
          </h2>
        </div>

        {/* MISSION ITEMS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
          {mission.map((mission, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6">
                <img
                  src={mission.icon}
                  alt={mission.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium font-['Halyard_Display'] mb-2">
                {mission.title}
              </h3>
              <p className="text-base font-light font-['Halyard_Display'] text-black">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
