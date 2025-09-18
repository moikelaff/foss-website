import React from "react";

export default function PhDProgramBanner() {
  return (
    <section className="max-w-[1480px] mx-auto py-16 px-4 md:px-20 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
      
      {/* Left: Text */}
      <div className="flex flex-col items-start gap-8 max-w-full md:max-w-[700px]">
        <h1 className="text-4xl md:text-7xl font-medium font-['Halyard_Display'] text-Primary-1 leading-tight md:leading-[100px]">
          PhD in Political Science
        </h1>
        <p className="text-base md:text-2xl font-light font-['Halyard_Display'] text-Neutral-1 leading-relaxed">
          The Ph.D. program in Political Science at UIII stands as a beacon of academic excellence and rigorous scholarship.
          Tailored to address the intricate political landscapes of Muslim societies and states, this program seeks to nurture
          scholars who will be proficient in original, independent research about political dynamics.
        </p>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-[500px] h-auto">
        <img
          src="/phd-hero.png"
          alt="PhD in Political Science"
          className="w-full h-auto object-contain"
        />
      </div>
      
    </section>
  );
}
