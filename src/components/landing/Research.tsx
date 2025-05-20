"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Research() {
  const researchList = [
    {
      image: "/landing-page/cover-research.png",
      title:
        "Achieving global biodiversity targets requires shifting food and land use system trajectories",
      author: "Sonny Mumbunan, Ph.D.",
      date: "October 21, 2024",
    },
    {
      image: "/landing-page/ClassEnvironment4.png",
      title:
        "Adapting East and Southern Africa’s livestock to climate change: a decision making under deep uncertainty-based approach for effective actions",
      author: "Prof. Michiel Schaeffer",
      date: "October 12, 2024",
    },
    {
      image: "/landing-page/cover-research.png",
      title:
        "Tunisian Democracy at a Crossroads: A Comparative Analysis of Beji Caid Essebsi and Kais Saied Regimes",
      author: "Nizar Lukman",
      date: "July 24, 2024",
    },
    {
      image: "/landing-page/cover-research.png",
      title:
        "Food Security and Sustainable Agriculture: A Multilateral Response for the Global South",
      author: "Dr. Amelia Putri",
      date: "June 10, 2024",
    },
    {
      image: "/landing-page/cover-research.png",
      title:
        "The Role of Faith in Sustainable Development: Intersections of Religion and Environmental Policy",
      author: "Imam Rahmat Hidayat",
      date: "May 5, 2024",
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
    <section className="bg-[#f9fafb] py-16 px-6 relative">
      <h2 className="mx-auto text-5xl text-brandNavy font-medium mb-12 flex items-center justify-center text-center gap-4">
        <img
          src="/landing-page/Research.svg"
          alt="newspaper Icon"
          className="w-12 h-12"
        />
        Research Spotlight
      </h2>

      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow-md p-2"
      >
        <ChevronLeft className="w-6 h-6 text-brandNavy" />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-6 pb-3"
      >
        {researchList.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group flex-shrink-0 w-[360px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            <div className="w-full h-[4px] bg-[#4C839E]" />

            <div className="p-6">
              <h3 className="text-lg font-medium leading-snug mb-2 text-black relative inline-block">
                <span className="relative z-10">{item.title}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#4C839E] transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <div className="flex justify-between mt-4">
                <p className="text-sm text-gray-700">{item.author}</p>
                <p className="text-sm text-gray-600">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow-md p-2"
      >
        <ChevronRight className="w-6 h-6 text-brandNavy" />
      </button>
    </section>
  );
}
