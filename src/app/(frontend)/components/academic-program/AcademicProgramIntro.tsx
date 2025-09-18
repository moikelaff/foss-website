'use client';
import React from "react";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function AcademicProgramIntro({ title, description, imageUrl }: Props) {
  return (
    <section className="w-full flex justify-center bg-sky-950 py-16">
      <div className="w-[1440px] flex justify-between items-start px-16">
        {/* Text Section */}
        <div className="w-[800px] inline-flex flex-col justify-start items-start gap-14">
          <h1 className="text-white text-4xl font-medium font-['Halyard_Display']">
            {title}
          </h1>

          <p className="text-white text-2xl font-light font-['Halyard_Display'] whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Image Section */}
        <img
          className="w-96 h-[719px] object-cover"
          src={imageUrl}
          alt="Intro section image"
        />
      </div>
    </section>
  );
}
