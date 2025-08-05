import React from "react";

export default function MAProgramCourseStructure() {
  return (
    <section className="w-full bg-sky-950 py-16 px-4 md:px-20 flex justify-center">
      <div className="max-w-[1480px] w-full flex flex-col md:flex-row items-start gap-14">
        
        {/* Left: Title */}
        <h2 className="text-white text-5xl font-medium font-['Halyard_Display'] leading-[100px] whitespace-nowrap">
          Course Structure
        </h2>

        {/* Right: Description List */}
        <ul className="list-disc space-y-4 pl-6 text-white text-2xl font-light font-['Halyard_Display'] max-w-[800px]">
          <li>
            <strong>Foundation, Scope, and Method (15 credits):</strong> This part forms the bedrock of the Political Science program, introducing students to foundational concepts and theories, key debates, and research methods employed in political science research.
          </li>
          <li>
            <strong>Core and Elective Courses (18 credits):</strong> These modules allow students to specialize in their area of interest, be it Comparative Politics or International Relations. It offers a mix of mandatory core courses and electives, enabling students to tailor their learning experience.
          </li>
          <li>
            <strong>University Course (3 credits):</strong> In line with the UIII’s spirit to foster peaceful and harmonious co-existence among diverse groups or societies in the world, the university equips students with a good understanding and the challenges of building religious moderation in a contemporary, global world.
          </li>
          <li>
            <strong>Writing and Critical Thinking (3 credits):</strong> Here, students are equipped with the skills to articulate their research findings effectively, ensuring clarity, coherence, and academic rigor.
          </li>
          <li>
            <strong>MA Thesis (6 credits):</strong> The culmination of the MA journey, this segment requires students to undertake a substantial research project, synthesizing their learning and contributing original insights to the field.
          </li>
        </ul>
      </div>
    </section>
  );
}
