import Link from 'next/link';
import Image from 'next/image';
import { getHeroData, getMediaUrl } from '@/payload';

const HeroSection = async () => {
  const heroData = await getHeroData();

  // Fallback data if no CMS data is available
  const fallbackData = {
    title: 'UIII ADMISSIONS 2025/2026 NOW OPEN',
    subtitle: 'Take the next step in your academic journey with our world-class programs',
    backgroundImage: '/LandingPage/Hero.png',
    ctaButtons: [
      { text: 'Learn More', href: '/learn-more', style: 'primary' },
      { text: 'Apply Now', href: '/apply', style: 'secondary' }
    ]
  };

  const data = heroData || fallbackData;
  
  // Get background image URL - now back to using Media collection
  let backgroundImageUrl = fallbackData.backgroundImage; // Default fallback
  
  if (heroData?.backgroundImage) {
    backgroundImageUrl = getMediaUrl(heroData.backgroundImage);
  }

  // Don't render Image if URL is empty or invalid
  const hasValidImage = backgroundImageUrl && 
                       backgroundImageUrl.trim() !== '' && 
                       backgroundImageUrl !== 'undefined';

  return (
    <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {hasValidImage ? (
          <Image
            src={backgroundImageUrl}
            alt={heroData?.backgroundImage?.alt || "UIII Campus"}
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
        ) : (
          // Fallback gradient background when no image is available
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900" />
        )}
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-halyard tracking-wide mb-6 md:mb-8 lg:mb-12 drop-shadow-lg">
          {data.title}
        </h1>
        
        {data.subtitle && (
          <p className="text-xl md:text-2xl text-white font-light mb-10 max-w-3xl mx-auto font-halyard opacity-90">
            {data.subtitle}
          </p>
        )}
        
        {data.ctaButtons && data.ctaButtons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            {data.ctaButtons.map((button: any, index: number) => (
              <Link 
                key={index}
                href={button.href} 
                className={`font-medium px-8 py-3 rounded hover:scale-105 transition-all duration-300 min-w-[160px] text-center font-halyard shadow-lg ${
                  button.style === 'primary' 
                    ? 'bg-white text-blue-900 hover:bg-opacity-95' 
                    : 'bg-blue-900 text-white border border-transparent hover:bg-blue-800 hover:border-white'
                }`}
              >
                {button.text}
              </Link>
            ))}
          </div>
        )}
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;