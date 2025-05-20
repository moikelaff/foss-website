"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const images = [
    "/landing-page/ClassEnvironment.jpeg",
    "/landing-page/LectureTeaching.png",
    "/landing-page/Building.png",
    "/landing-page/ClassEnvironment2.jpeg",
    "/landing-page/LectureTeaching2.png",
    "/landing-page/ClassEnvironment3.png",
    "/landing-page/LectureTeaching3.jpeg",
    "/landing-page/ClassEnvironment4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[655px] overflow-hidden">
      {/* Background Image */}
      <img
        src={images[currentImageIndex]}
        alt="UIII Header"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay + Content */}
      <div className="absolute bottom-0 left-0 w-full h-3/4 z-10 bg-gradient-to-t from-[#01395E]/100 to-[#01395E]/0">
        <div className="text-white text-center px-6 py-12 md:px-14 flex flex-col items-center justify-center h-full mt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 max-w-5xl">
            Faculty of Social Sciences UIII
          </h1>
          <p className="max-w-5xl text-lg md:text-xl mb-6">
            Our focus includes studying, discussing, and introducing the
            dynamics of social and political developments in Indonesian Islam,
            with the goal of enhancing understanding both within Indonesian
            society and the international community.
          </p>
          <div className="flex gap-4">
            <Link href="/about-faculty">
              <button className="px-6 py-3 bg-white text-brandNavy text-lg md:text-xl font-medium rounded-lg hover:bg-[#4C839E] hover:text-white shadow-md">
                Learn More
              </button>
            </Link>
            <Link href="/admissions" target="_blank">
              <button className="px-6 py-3 bg-white text-brandNavy text-lg md:text-xl font-medium rounded-lg hover:bg-[#4C839E] hover:text-white shadow-md">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
