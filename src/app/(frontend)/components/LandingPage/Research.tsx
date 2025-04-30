import Link from 'next/link';
import Image from 'next/image';

interface ResearchCardProps {
  title: string;
  author: string;
  imageSrc: string;
  href: string;
  abstract?: string;
}

const ResearchCard = ({ title, author, imageSrc, href, abstract }: ResearchCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-transform hover:scale-[1.02] duration-300">
      {abstract ? (
        // Card with abstract
        <div className="p-6 flex flex-col h-full">
          <div className="text-xs text-gray-700 font-semibold mb-2">Abstract</div>
          <p className="text-xs text-gray-700 mb-8 line-clamp-6">{abstract}</p>
          <h3 className="text-lg font-bold text-brandNavy mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mt-auto">{author}</p>
        </div>
      ) : (
        // Card with image
        <>
          <div className="relative w-full h-56 md:h-64">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-brandNavy mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mt-auto">{author}</p>
          </div>
        </>
      )}
    </div>
  );
};

const ResearchSection = () => {
  // Toggle this to switch between image display and abstract display
  const showAbstracts = false;

  const researchItems = [
    {
      title: "Achieving global biodiversity targets requires shifting food and land use system trajectories",
      author: "Sonny Mumbunan, Ph.D.",
      imageSrc: "/LandingPage/Research1.png",
      href: "/research/biodiversity-targets",
      abstract: "The paper analyzes the implementation of sustainable food and agriculture systems to meet biodiversity conservation goals. It highlights the need for integrated approaches across food, biodiversity, climate, and socioeconomic factors, as well as coordinated national pathways to achieving multiple goals in tandem."
    },
    {
      title: "Social Media and the Reshaping of Religious Identity in Youth",
      author: "Saemah Shamim",
      imageSrc: "/LandingPage/Research2.png",
      href: "/research/social-media-religious-identity",
      abstract: "In recent years, much research has shed light on social structure and interpretation concerns that have highlighted problems with religious tolerance and extremism. Social media platforms like Facebook, Twitter, Instagram, etc. which have imposed old discussions about paradigms of power have a fresh viewpoint. It established the correlation between social media and religious intolerance."
    },
    {
      title: "Deradicalization Programs to Measure Changes in Terrorist Ideology in Indonesia",
      author: "Yudi Zulfahri & Aldi Nur Fadli Auliya",
      imageSrc: "/LandingPage/Research3.png",
      href: "/research/deradicalization-programs",
      abstract: "The paper analyzes the inefficiency of the Deradicalization strategy implemented by The National Counter-Terrorism Agency (BNPT), tackling the issue of recidivist terrorism in Indonesia. Although the occurrence of recidivism is common in various crimes, it poses greater challenges in terrorism cases, given that the government has allocated a specific budget and established a special agency, BNPT, to tackle terrorism-related issues."
    }
  ];

  return (
    <section className="w-full bg-brandNavy py-8">
      {/* Reduced top padding from pt-16 to pt-8 */}
      <div className="flex flex-col items-center pt-8 pb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brandWhite text-center">
          RESEARCH
        </h2>
      </div>
      
      {/* Increased max width and reduced horizontal padding */}
      <div className="w-full max-w-[1536px] mx-auto px-2 sm:px-3 md:px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {researchItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="group hover:opacity-95 transition-opacity"
            >
              <ResearchCard
                title={item.title}
                author={item.author}
                imageSrc={item.imageSrc}
                href={item.href}
                abstract={showAbstracts ? item.abstract : undefined}
              />
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center md:justify-end mt-10">
          <Link 
            href="/research"
            className="inline-flex items-center px-6 py-3 rounded-md bg-brandWhite text-brandNavy font-medium hover:bg-opacity-90 transition-colors duration-300"
          >
            View All Research
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;