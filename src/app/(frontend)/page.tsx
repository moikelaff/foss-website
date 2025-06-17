import type { Metadata } from 'next';
import HeroSection from '@/components/LandingPage/Hero';
import ProgramsSection from '@/components/LandingPage/Programs';
import ResearchSection from '@/components/LandingPage/Research';
import HeadlinesSection from '@/components/LandingPage/Headlines';
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Faculty of Social Sciences - UIII',
  description: 'Faculty of Social Sciences at Universitas Islam International Indonesia. Explore our academic programs, research, and more.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-grow">
        <NavBar />
        <HeroSection />
        <ProgramsSection />
        <ResearchSection />
        <HeadlinesSection />
        <Footer />
      </div>
    </main>
  );
}