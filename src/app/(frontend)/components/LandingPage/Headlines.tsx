import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedHeadlines, getMediaUrl } from '@/payload';

interface HeadlineCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const HeadlineCard = ({ title, description, imageSrc, href }: HeadlineCardProps) => {
  return (
    <Link href={href} className="group flex flex-col h-full transition-transform hover:scale-[1.02] duration-300">
      <div className="w-full h-56 md:h-64 relative mb-4 overflow-hidden rounded-lg shadow-md">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-bold text-brandNavy mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">{description}</p>
      <span className="text-sm font-medium text-brandNavy hidden group-hover:inline-flex items-center">
        Read more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </span>
    </Link>
  );
};

const HeadlinesSection = async () => {
  const headlines = await getFeaturedHeadlines(3);

  // Fallback data if no CMS data is available
  const fallbackHeadlines = [
    {
      title: "Preliminary Research Findings Dissemination West Java",
      description: "UIII hosted a research dissemination event titled \"Policy Innovation and Regional Development in West Java,\" showcasing the initial findings of a major research project in the region.",
      image: "/LandingPage/Headlines1.png",
      slug: "research-findings-west-java-1"
    },
    {
      title: "Preliminary Research Findings Dissemination West Java",
      description: "UIII hosted a research dissemination event titled \"Policy Innovation and Regional Development in West Java,\" showcasing the initial findings of a major research project in the region.",
      image: "/LandingPage/Headlines2.png",
      slug: "research-findings-west-java-2"
    },
    {
      title: "Preliminary Research Findings Dissemination West Java",
      description: "UIII hosted a research dissemination event titled \"Policy Innovation and Regional Development in West Java,\" showcasing the initial findings of a major research project in the region.",
      image: "/LandingPage/Headlines3.png",
      slug: "research-findings-west-java-3"
    }
  ];

  const headlinesData = headlines.length > 0 ? headlines : fallbackHeadlines;

  return (
    <section className="w-full bg-gray-50">
      <div className="flex flex-col items-center pt-16 pb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brandNavy text-center font-halyard">
          HEADLINES
        </h2>
      </div>
      
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 xl:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {headlinesData.map((headline: any, index: number) => {
            // Handle both CMS data and fallback data
            const imageUrl = headline.image 
              ? (typeof headline.image === 'string' ? headline.image : getMediaUrl(headline.image))
              : headline.image || `/LandingPage/Headlines${index + 1}.png`;
            
            const href = headline.slug ? `/headlines/${headline.slug}` : `/headlines/research-findings-west-java-${index + 1}`;
            
            return (
              <HeadlineCard
                key={headline.slug || headline.id || index}
                title={headline.title}
                description={headline.description}
                imageSrc={imageUrl}
                href={href}
              />
            );
          })}
        </div>

        <div className="flex justify-center md:justify-end mt-10">
          <Link 
            href="/headlines"
            className="inline-flex items-center px-6 py-3 rounded-md bg-brandNavy text-brandWhite font-medium hover:bg-opacity-90 transition-colors duration-300 font-halyard"
          >
            View All Headlines
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeadlinesSection;