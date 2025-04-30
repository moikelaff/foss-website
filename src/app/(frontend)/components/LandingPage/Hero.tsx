import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Improved Loading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/LandingPage/Hero.png"
          alt="UIII Campus"
          fill
          priority
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/7lfwAJFgPBQJzlGQAAAABJRU5ErkJggg=="
          className="object-cover object-center"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>
      
      {/* Content Container with improved positioning */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 max-w-7xl mx-auto">
        {/* Main heading with enhanced typography */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brandWhite font-halyard tracking-wide mb-6 md:mb-8 lg:mb-12 drop-shadow-lg">
          UIII ADMISSIONS <br className="hidden md:block" />
          2025/2026 NOW OPEN
        </h1>
        
        {/* Optional subheading */}
        <p className="text-xl md:text-2xl text-white font-light mb-10 max-w-3xl mx-auto font-halyard opacity-90">
          Take the next step in your academic journey with our world-class programs
        </p>
        
        {/* CTA buttons with enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <Link 
            href="/learn-more" 
            className="bg-brandWhite text-brandNavy font-medium px-8 py-3 rounded hover:bg-opacity-95 hover:scale-105 transition-all duration-300 min-w-[160px] text-center font-halyard shadow-lg"
          >
            Learn More
          </Link>
          <Link 
            href="/apply" 
            className="bg-brandNavy text-brandWhite border border-transparent font-medium px-8 py-3 rounded hover:bg-brandNavy/90 hover:border-white hover:scale-105 transition-all duration-300 min-w-[160px] text-center font-halyard shadow-lg"
          >
            Apply Now
          </Link>
        </div>
        
        {/* Decorative element */}
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