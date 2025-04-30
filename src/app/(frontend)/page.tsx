import type { Metadata } from 'next';
import HeroSection from '@/app/(frontend)/components/LandingPage/Hero';
import ProgramsSection from '@/app/(frontend)/components/LandingPage/Programs';
import ResearchSection from '@/app/(frontend)/components/LandingPage/Research';
import HeadlinesSection from '@/app/(frontend)/components/LandingPage/Headlines';

export const metadata: Metadata = {
  title: 'Faculty of Social Sciences - UIII',
  description: 'Faculty of Social Sciences at Universitas Islam International Indonesia. Explore our academic programs, research, and more.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-grow">
        <HeroSection />
        <ProgramsSection />
        <ResearchSection />
        <HeadlinesSection />
      </div>
    </main>
  );
}