"use client";

import React, { useState } from "react";

const lecturers = [
  { id: 1, name: "Sirojuddin Arif, Ph.D.", image: "https://placehold.co/200x200?text=name" },
  { id: 2, name: "Sonny Mumbunan, Ph.D.", image: "https://placehold.co/200x200?text=name" },
  { id: 3, name: "Assoc. Prof. Moch Faisal Karim", image: "/Assoc. Prof. Moch Faisal Karim.jpg" },
  { id: 4, name: "Testriono, Ph.D.", image: "https://placehold.co/200x200?text=name" },
  { id: 5, name: "Prof. Greg Fealy", image: "https://placehold.co/200x200?text=name" },
  { id: 6, name: "Prof. Michiel Schaeffer", image: "/Prof. Michiel Schaeffer.jpg" },
  { id: 7, name: "Samuel Blanch, Ph.D.", image: "/Samuel Blanch, Ph.D..jpg" },
  { id: 8, name: "Prof. Komaruddin Hidayat", image: "https://placehold.co/200x200?text=name" },
  { id: 9, name: "Prof. Farish A. Noor", image: "/Prof. Farish A. Noor.jpg" },
  { id: 10, name: "James Jordan Guild, Ph.D.", image: "/James Jordan Guild, Ph.D..jpg" },
  { id: 11, name: "Muhammad Al Atiqi, Ph.D.", image: "/Muhammad Al Atiqi, Ph.D..jpg" },
  { id: 12, name: "Priza Marendraputra, Ph.D.", image: "/Priza Marendraputra, Ph.D..jpg" },
  { id: 13, name: "Prof. Maya Sari", image: "https://placehold.co/200x200?text=name" },
  { id: 14, name: "Dr. Nurul Fadilah", image: "https://placehold.co/200x200?text=name" },
  { id: 15, name: "Prof. Omar Yassin", image: "https://placehold.co/200x200?text=name" },
  { id: 16, name: "Dr. Putri Anindya", image: "https://placehold.co/200x200?text=name" },
];

export default function PhDProgramLecturers() {
  const [currentPage, setCurrentPage] = useState(0);
  const lecturersPerPage = 6;
  const totalPages = Math.ceil(lecturers.length / lecturersPerPage);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const startIndex = currentPage * lecturersPerPage;
  const currentLecturers = lecturers.slice(startIndex, startIndex + lecturersPerPage);

  return (
    <section className="max-w-[1480px] mx-auto py-16 px-6 flex flex-col items-center gap-12">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-medium font-['Halyard_Display'] text-Primary-1 text-center">
        Program Lecturers
      </h2>

      {/* Lecturers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {currentLecturers.map((lecturer) => (
          <div key={lecturer.id} className="flex flex-col items-center text-center">
            <img
              src={lecturer.image}
              alt={lecturer.name}
              className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full"
            />
            <p className="mt-3 text-sm md:text-base font-light font-['Halyard_Display'] text-Neutral-6 break-words">
              {lecturer.name}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-4 py-2 text-sm bg-Primary-1 text-white rounded disabled:opacity-40"
        >
          Prev
        </button>

        {/* Page Indicator */}
        <span className="text-sm text-Neutral-6 font-light">
          Page {currentPage + 1} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 text-sm bg-Primary-1 text-white rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </section>
  );
}
