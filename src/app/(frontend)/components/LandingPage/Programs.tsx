import Link from 'next/link';
import Image from 'next/image';
import { getProgramsData, getMediaUrl } from '@/payload';

interface ProgramCardProps {
  title: string;
  imageSrc: string;
  href: string;
}

const ProgramCard = ({ title, imageSrc, href }: ProgramCardProps) => {
  return (
    <div className="group relative flex flex-col transition-transform hover:z-10 hover:shadow-xl">
      {/* Image container takes full width with fixed height */}
      <div className="w-full h-80 relative overflow-hidden">
        <Image 
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {/* Overlay that gets darker on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-500"></div>
      </div>
      
      {/* Content container for text and button */}
      <div className="flex flex-col items-center py-8 px-4 bg-white">
        <h3 className="text-xl text-brandNavy font-bold mb-4 font-halyard text-center">
          {title}
        </h3>
        <Link 
          href={href}
          className="inline-block border-2 border-brandNavy text-brandNavy px-6 py-2 rounded hover:bg-brandNavy hover:text-white transition-colors duration-300 font-halyard font-medium"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const ProgramsSection = async () => {
  const programsData = await getProgramsData();

  // Fallback data if no CMS data is available
  const fallbackPrograms = [
    {
      title: "MA in Political Sciences",
      image: "/LandingPage/Programs-MA.png",
      detailsPage: "/academic-program/ma-political-science",
      slug: "ma-political-science",
      order: 1
    },
    {
      title: "Ph.D. in Political Sciences",
      image: "/LandingPage/Programs-PHD.png",
      detailsPage: "/academic-program/phd-political-science",
      slug: "phd-political-science",
      order: 2
    },
    {
      title: "Masters in Public Policy",
      image: "/LandingPage/Programs-Masters.png",
      detailsPage: "/academic-program/master-public-policy",
      slug: "master-public-policy",
      order: 3
    }
  ];

  const programs = programsData.length > 0 ? programsData : fallbackPrograms;

  // Sort by order field
  const sortedPrograms = programs.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));

  return (
    <section className="w-full bg-white">
      <div className="flex flex-col items-center pt-12 pb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brandNavy text-center font-halyard tracking-wide">
          PROGRAMS
        </h2>
      </div>
      
      {/* Full-width image grid with no gaps */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        {sortedPrograms.map((program: any, index: number) => {
          const imageUrl = program.image 
            ? (typeof program.image === 'string' ? program.image : getMediaUrl(program.image))
            : program.image || `/LandingPage/Programs-${index + 1}.png`;
          
          const href = program.detailsPage || `/academic-program/${program.slug}`;
          
          return (
            <ProgramCard
              key={program.slug || program.id || index}
              title={program.title}
              imageSrc={imageUrl}
              href={href}
            />
          );
        })}
      </div>
      
      {/* Added some bottom padding to maintain visual balance */}
      <div className="pb-16"></div>
    </section>
  );
};

export default ProgramsSection;