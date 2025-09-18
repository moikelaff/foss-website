import Link from "next/link";
type Program = {
  title: string;
  description: string;
  image: { url: string };
  slug: string;
};

type Props = {
  programs: Program[];
};

export default function ProgramsSection({ programs }: Props) {
  return (
    <section className="w-full">
      <div className="w-full mx-auto">
        <div className="bg-[#D9D9D9] w-full py-12 flex justify-center">
          <h2 className="max-w-[1480px] text-3xl md:text-[40px] font-[500] leading-snug text-center text-gray-900 mb-8">
            Discover academic excellence at the Faculty of Social Sciences, UIII.<br />
            We offer diverse and comprehensive programs to equip you with the skills and knowledge to excel in today’s dynamic world.
            Explore the available programs and find the one that aligns with your aspirations:
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} overflow-hidden`}
              style={{ backgroundColor: "#D9D9D9" }}
            >
              <img
                src={program.image?.url}
                alt={program.title}
                className="w-full md:w-1/2 h-[720px] object-cover"
              />

              <div className="flex flex-col justify-center md:w-1/2 p-[100px]">
                <h3 className="text-[40px]">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
                <Link href={`/academic-program/${program.slug}`} rel="noopener noreferrer">
                  <button className="w-[190px] h-[68px] border-[4px] border-[#01395E] bg-transparent mt-4 px-4 py-2 text-[#01395E] text-[24px] font-semibold rounded-lg transition-colors duration-300 hover:border-blue-600 hover:text-blue-600">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
