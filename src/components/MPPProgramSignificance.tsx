// src/components/PHDPoliticalScience.tsx
import React from "react";

export default function MPPProgramSignificance() {
  return (
    <section className="max-w-[1480px] mx-auto py-16 px-20 flex flex-col items-start gap-14">

      {/* Program Significance */}
      <div className="w-full flex flex-col items-start gap-6">
        <h2 className="text-6xl font-medium font-['Halyard_Display'] text-Primary-1 leading-[100px]">
          Program Significance
        </h2>
        <div className="flex flex-wrap justify-start items-start gap-10">
              <p className="text-1xl font-light font-['Halyard_Display'] text-black">
                While the younger generation in the North is worried about their future due to climate 
                change, the youth in the South are at the same time grappling with the daily realities of 
                the climate crises. Privileged lifestyles in the Global North, such as Europe, North America, 
                and East Asia nations produce a carbon footprint 100 times greater than that of the world’s 
                poor nations combined. Therefore, it is very important to uncover global inequalities in 
                times of climate change, search for their countermeasures, and craft public policies that 
                reflect circumstances in the Global South. The search for effective countermeasures to 
                address the climate change catastrophe is of utmost urgency for sustainable development. In 
                this context, public policy programs that specifically concentrate on climate change from the 
                perspective of the global south region have the potential to be a groundbreaking approach in 
                preparing the next generation of policy makers.
              </p>
        </div>
      </div>
    </section>
  );
}
