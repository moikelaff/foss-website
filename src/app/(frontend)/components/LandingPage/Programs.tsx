import Link from 'next/link';
import Image from 'next/image';

interface ProgramCardProps {
  title: string;
  imageSrc: string;
  href: string;
}

const ProgramsSection = () => {
  const programs = [
    {
      title: "MA in political sciences",
      imageSrc: "/LandingPage/Programs-MA.png",
      href: "/programs/ma-political-sciences"
    },
    {
      title: "Ph.D. in political sciences",
      imageSrc: "/LandingPage/Programs-PHD.png",
      href: "/programs/phd-political-sciences"
    },
    {
      title: "Masters in Public Policy",
      imageSrc: "/LandingPage/Programs-Masters.png",
      href: "/programs/masters-public-policy"
    }
  ];

  return (
    <section className="w-full bg-white">
      <div className="flex flex-col items-center pt-12 pb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brandNavy text-center font-halyard tracking-wide">
          PROGRAMS
        </h2>
      </div>
      
      {/* Full-width image grid with no gaps */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        {programs.map((program, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col transition-transform hover:z-10 hover:shadow-xl"
          >
            {/* Image container takes full width with fixed height - Added overflow-hidden */}
            <div className="w-full h-80 relative overflow-hidden">
              <Image 
                src={program.imageSrc}
                alt={program.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Overlay that gets darker on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-500"></div>
            </div>
            
            {/* Content container for text and button */}
            <div className="flex flex-col items-center py-8 px-4 bg-white">
              <h3 className="text-xl text-brandNavy font-bold mb-4 font-halyard text-center">
                {program.title}
              </h3>
              <Link 
                href={program.href}
                className="inline-block border-2 border-brandNavy text-brandNavy px-6 py-2 rounded hover:bg-brandNavy hover:text-white transition-colors duration-300 font-halyard font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Added some bottom padding to maintain visual balance */}
      <div className="pb-16"></div>
    </section>
  );
};

export default ProgramsSection;