'use client';
import React, { useEffect, useState } from 'react';

type HeroData = {
  title: string;
  description: string;
  backgroundImage?: {
    url?: string;
  };
};

export default function AcademicProgramHero() {
  const [data, setData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/academic-program-landing?limit=1`
        );
        const json = await res.json();
        setData(json?.docs?.[0] || null);
      } catch (error) {
        console.error('Failed to fetch hero data:', error);
      }
    };

    fetchHeroData();
  }, []);

  if (!data) return null;

  const backgroundUrl = data.backgroundImage?.url
    ? `${process.env.NEXT_PUBLIC_API_URL}${data.backgroundImage.url}`
    : '/academic-program-bg.png'; // fallback

  return (
    <section className="w-full h-[700px] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundUrl}
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
            {data.title}
          </h1>
          <p className="w-[853px] text-center text-white text-3xl font-light font-['Halyard_Display']">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}
