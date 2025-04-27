"use client";

import React, { useState } from "react";

const lecturers = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  name: `Lecturer ${i + 1}`,
  image: `https://placehold.co/200x200?text=Lecturer+${i + 1}`,
}));

export default function ProgramLecturers() {
  const [currentPage, setCurrentPage] = useState(0);
  const lecturersPerPage = 5;
  const totalPages = Math.ceil(lecturers.length / lecturersPerPage);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * lecturersPerPage;
  const currentLecturers = lecturers.slice(startIndex, startIndex + lecturersPerPage);

  return (
    <section className="max-w-[1480px] mx-auto py-16 px-4 flex flex-col items-center gap-10">
      {/* Title */}
      <h2 className="text-6xl font-medium font-['Halyard_Display'] text-Primary-1 leading-[100px]">
        Program Lecturer
      </h2>

      {/* Lecturers List */}
      <div className="w-full flex justify-center gap-8">
        {currentLecturers.map((lecturer) => (
          <div key={lecturer.id} className="flex flex-col items-center gap-4">
            <img
              src={lecturer.image}
              alt={lecturer.name}
              className="w-40 h-40 object-cover rounded-full"
            />
            <p className="text-2xl font-light font-['Halyard_Display'] text-Neutral-6">{lecturer.name}</p>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-6 py-2 bg-Primary-1 text-Neutral-6 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="px-6 py-2 bg-Primary-1 text-Neutral-6 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
