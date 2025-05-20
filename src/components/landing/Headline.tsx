"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Headline() {
  const headlines = [
    {
      date: "May 16, 2025",
      title:
        "Insightful Engagement on the National Zakat Index: ESA UIII Successfully Concludes 2nd Research Community Session",
      image: "/landing-page/ClassEnvironment3.png",
    },
    {
      date: "March 11, 2025",
      title:
        "MFin Students Gain Firsthand Insights into Carbon Trading at IDX Carbon",
      image: "/landing-page/LectureTeaching2.png",
    },
    {
      date: "February 20, 2025",
      title:
        "Professor Dian Masyita Honored as a Changemaker in Empowering Communities",
      image: "/landing-page/LectureTeaching.png",
    },
    {
      date: "May 16, 2025",
      title:
        "Insightful Engagement on the National Zakat Index: ESA UIII Successfully Concludes 2nd Research Community Session",
      image: "/landing-page/ClassEnvironment3.png",
    },
    {
      date: "March 11, 2025",
      title:
        "MFin Students Gain Firsthand Insights into Carbon Trading at IDX Carbon",
      image: "/landing-page/LectureTeaching2.png",
    },
    {
      date: "February 20, 2025",
      title:
        "Professor Dian Masyita Honored as a Changemaker in Empowering Communities",
      image: "/landing-page/LectureTeaching.png",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-14 bg-white relative">
      <h2 className="mx-auto text-5xl text-brandNavy font-medium mb-12 flex items-center justify-center text-center gap-4">
        <img
          src="/landing-page/newspaper.svg"
          alt="newspaper Icon"
          className="w-10 h-10"
        />
        Headlines
      </h2>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2"
        >
          <ChevronLeft className="w-6 h-6 text-brandNavy" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-2 md:px-12 pb-3"
        >
          {headlines.map((item, idx) => (
            <div
              key={idx}
              className="w-[360px] flex-shrink-0 relative overflow-hidden rounded-3xl group h-[450px] shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-[#01395E]/100 to-transparent text-white p-6 flex flex-col justify-end">
                <p className="text-sm opacity-90 mb-1">{item.date}</p>
                <h3 className="text-lg font-medium leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow-md p-2"
        >
          <ChevronRight className="w-6 h-6 text-brandNavy" />
        </button>
      </div>
    </section>
  );
}
